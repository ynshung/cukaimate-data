import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 2818;

// Path to the build directory
const buildPath = path.join(__dirname, '../build');

// Serve static files from the build directory
app.use(express.static(buildPath));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(`Serving files from: ${buildPath}`);
});
