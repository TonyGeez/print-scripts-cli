# Print Script CLI

Display package.json scripts in a beautiful, color-coded format.

## Installation

```bash
npm install -g print-scripts-cli
```

## Usage

Navigate to any project directory and run:

```bash
psc
```

The CLI will automatically find and display all scripts from your `package.json`.

## Example Output

```
█ dev      → vite
█ build    → tsc && vite build
█ preview  → vite preview
█ test     → vitest
```

## Requirements

- Node.js (any recent version)
- A `package.json` file in your current directory

## Features

- Color-coded, easy-to-read output
- Fast and lightweight
- Automatically detects package.json
- Aligned script names and commands

## License

MIT
