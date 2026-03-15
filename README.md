# CukaiMate Data Repository

A data repository containing structured Malaysian tax relief and assessment records for the **[CukaiMate](http://cukaimate.com/)** app. This repository maintains the TypeScript data models for various financial years (FY) and compiles them into static JSON artifacts served by a local Express API.

## Features
- **Structured Tax Data**: Organized by financial year (e.g., FY2025, FY2026) containing precise tax relief rules, income types, and eligibility thresholds.
- **Type-Safe Models**: Written strictly in TypeScript to guarantee consistent data structures.
- **Automated Artifact Generation**: Bundled script to output JSON copies (`index.json`, `notes.json`) along with hash versioning for consumption by external applications.
- **Local API Environment**: Built-in Express server to instantly preview the built data structures API.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/ynshung/cukaimate-data
cd cukaimate-data
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`
Concurrently starts the TypeScript watcher (`watch` script) and the local API server (`serve` script). This is the primary command for local development.

### `npm run build`
Compiles all the TypeScript models defined in `src/` and converts them to JSON format inside the `build/` directory using the `scripts/build-data.ts` module.

### `npm run watch`
Watches the `src/`, `types/`, and `constants/` directories. On any detected source changes, it automatically triggers `npm run build`.

### `npm run serve`
Fires up a local Express server on `http://localhost:2818` to static-serve the generated JSON content from the `build/` directory.

### `npm run lint`
Runs the TypeScript compiler (`tsc`) as a linter without emitting compiled files to check for type errors.

## Project Structure

```plaintext
.
├── build/               # Generated JSON data and API directory
├── constants/           # Global constant definitions
├── scripts/
│   └── build-data.ts    # Compilation script processing TS objects into JSON
├── src/                 # Financial Year models (e.g., FY2025, FY2026)
├── types/               # Shared TypeScript interface and type definitions
├── index.ts             # Entry point aggregating all FY definitions
└── server.ts            # Express server configuration
```

## Contributing

> If you're not a developer, you may send feedback through https://cukaimate.com/feedback.

Contributions are welcome! If you'd like to help improve the tax models, add new data, or fix an issue, please feel free to open a pull request or submit an issue in the repository.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/NewRelief`)
3. Commit your changes (`git commit -m 'Add some new relief'`)
4. Push to the branch (`git push origin feature/NewRelief`)
5. Open a Pull Request

Usually for the current financial year, it will be first copied from the previous financial year and amended after the full details are released from LHDN.

## License

GNU GPLv3

All explanatory notes are from LHDN and are subject to copyright.
