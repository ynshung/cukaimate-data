
import fs from 'fs-extra';
import path from 'path';
import crypto from 'crypto';
import { years } from '../index';

const BUILD_DIR = path.join(__dirname, '../build');

/**
 * Creates a replacer function that:
 * 1. Handles Map serialization
 * 2. Extracts explanatoryNotes to a separate map
 */
function createReplacer(notesMap: Map<string, string>) {
  return function(this: any, key: string, value: any) {
    // Extract explanatoryNotes
    if (key === 'explanatoryNotes') {
      if (typeof value === 'string' && this && this.id) {
        notesMap.set(this.id, value);
      }
      return undefined; // Exclude from main JSON
    }

    // Handle Map serialization
    if (value instanceof Map) {
      const obj: Record<string, any> = {};
      for (const [k, v] of value) {
        if (typeof k === 'string') {
          obj[k] = v;
        } else {
          // Fallback to array of entries if any key is not string
          return Array.from(value.entries());
        }
      }
      return obj;
    }
    
    return value;
  };
}

async function build() {
  console.log('Starting build process...');
  
  // Ensure build directory exists
  await fs.ensureDir(BUILD_DIR);

  // Clear files
  await fs.emptyDir(BUILD_DIR);
  
  const indexMetadata: Record<string, any> = {};
  const availableYears: number[] = [];

  for (const yearStr in years) {
    const yearNum = Number(yearStr);
    const data = years[yearNum as keyof typeof years];
    
    if (!data) continue;

    console.log(`Processing FY${yearNum}...`);

    const yearDirName = `FY${yearNum}`;
    const yearDirPath = path.join(BUILD_DIR, yearDirName);
    await fs.ensureDir(yearDirPath);

    const notesMap = new Map<string, string>();
    const replacer = createReplacer(notesMap);

    // Serialize generic data (excludes notes)
    const dataJsonString = JSON.stringify(data, replacer, 2);
    const dataFileName = 'index.json';
    const dataFilePath = path.join(yearDirPath, dataFileName);
    
    await fs.writeFile(dataFilePath, dataJsonString);

    // Serialize notes
    // Sort keys for deterministic output
    const sortedNotes = Object.fromEntries([...notesMap.entries()].sort());
    const notesJsonString = JSON.stringify(sortedNotes, null, 2);
    const notesFileName = 'notes.json';
    const notesFilePath = path.join(yearDirPath, notesFileName);

    await fs.writeFile(notesFilePath, notesJsonString);

    // Get stats for data file
    const dataStats = await fs.stat(dataFilePath);
    const dataHash = crypto.createHash('md5').update(dataJsonString).digest('hex');

    // Get stats for notes file
    const notesStats = await fs.stat(notesFilePath);
    const notesHash = crypto.createHash('md5').update(notesJsonString).digest('hex');

    availableYears.push(yearNum);
    
    indexMetadata[yearNum] = {
      id: yearDirName,
      year: yearNum,
      data: {
        file: `${yearDirName}/${dataFileName}`,
        version: dataHash.substring(0, 10),
        size: dataStats.size,
      },
      notes: {
        file: `${yearDirName}/${notesFileName}`,
        version: notesHash.substring(0, 10),
        size: notesStats.size,
      },
      updatedAt: new Date().toISOString(),
    };

    console.log(`Created ${yearDirName}/${dataFileName} - Size: ${(dataStats.size / 1024).toFixed(2)} KB`);
    console.log(`Created ${yearDirName}/${notesFileName} - Size: ${(notesStats.size / 1024).toFixed(2)} KB`);
  }

  // Create global index.json
  const indexData = {
    availableYears: availableYears.sort((a, b) => b - a), // Descending
    years: indexMetadata,
    generatedAt: new Date().toISOString(),
  };

  await fs.writeJson(path.join(BUILD_DIR, 'index.json'), indexData, { spaces: 2 });
  console.log('Created global index.json');
  console.log('Build complete.');
}

build().catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
