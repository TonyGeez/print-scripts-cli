#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Color theme
const RED = `\x1b[0;31m`;
const GREEN = `\x1b[0;32m`;
const CYAN = `\x1B[38;5;24m`;
const LIGHTCYAN="\x1B[38;5;152m"

const YELLOW = `\x1b[0;33m`;
const BLUE="\x1B[38;5;31m";
const BGBLUE="\x1B[48;5;31m";

const BOLD = "\x1B[1m"
const DIM = `\x1B[2m`;
const RESET = `\x1B[0m`;

const WARNING = `${BOLD}${YELLOW}⚠${RESET}${YELLOW}`;
const ERROR = `${BOLD}${RED}✘${RESET}${RED}`;
const SUCCESS = `${BOLD}${GREEN}✔${RESET}${GREEN}`;
const HEAD = `${BOLD}${BLUE}██ `;
const POINTER = `${BLUE}█ ${RESET}`;

const HL = `${BLUE}${BGBLUE}█████${RESET}${BOLD}${CYAN}${BGBLUE}`;
const HR = `${RESET}${BLUE}${BGBLUE}█████${RESET}`;
const BAR = `${BLUE}${BGBLUE}████████████████████████████${RESET}`;
// Main function
function displayPackageScripts() {
  const packageJsonPath = path.join(process.cwd(), 'package.json');

  // Check if package.json exists
  if (!fs.existsSync(packageJsonPath)) {
    console.log(`${ERROR} No package.json found in current directory${RESET}`);
    process.exit(1);
  }

  // Read and parse package.json
  let packageData;
  try {
    const fileContent = fs.readFileSync(packageJsonPath, 'utf8');
    packageData = JSON.parse(fileContent);
  } catch (err) {
    console.log(`${ERROR} Failed to read or parse package.json: ${err.message}${RESET}`);
    process.exit(1);
  }

  // Check if scripts exist
  if (!packageData.scripts || Object.keys(packageData.scripts).length === 0) {
    console.log(`${WARNING} No scripts found in package.json${RESET}`);
    process.exit(0);
  }

  // Display header

  console.log();
console.log(`${BAR}`);
console.log(`${HL} Print Script CLI ${HR}`);
console.log(`${BAR}`);
  
  console.log();

  // Display scripts
  const scripts = packageData.scripts;
  const scriptNames = Object.keys(scripts);
  const maxLength = Math.max(...scriptNames.map(name => name.length));

  scriptNames.forEach((scriptName, index) => {
    const paddedName = scriptName.padEnd(maxLength);
    const command = scripts[scriptName];
    
    console.log(`${POINTER} ${BOLD}${LIGHTCYAN}${paddedName}${RESET} ${DIM}→${RESET} ${LIGHTCYAN}${command}${RESET}`);
  });


  console.log();
}

// Run the CLI
displayPackageScripts();
