function matchPattern(inputLine, pattern) {
  console.log(`pattern inside fcn =${pattern}, inputLine=${inputLine}`);
  if (pattern.length === 1) {
    return inputLine.includes(pattern);
  } else if (pattern === "\\d") {
    console.log(`inside ///d ${pattern}`);
    return /\d/.test(inputLine);
  } else if (pattern === "\\w") {
    console.log(`inside ///w ${pattern}`);
    return /\w/.test(inputLine);
  } else {
    throw new Error(`Unhandled pattern ${pattern}`);
  }
}

function main() {
  const pattern = process.argv[3];
  const inputLine = require("fs").readFileSync(0, "utf-8").trim();
  console.log(`Pattern =>${pattern} Input Line =>${inputLine}`);
  if (process.argv[2] !== "-E") {
    process.exit(1);
  }

  if (matchPattern(inputLine, pattern)) {
    process.exit(0);
  } else {
    process.exit(1);
  }
}

main();
