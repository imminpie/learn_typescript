/**
 * Java: Exception
 * JavaScript: Error Interface
 */

// Error Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist!') {
    throw new Error(`file not exist! ${fileName}`);
  }
  return `file contents`;
}

function closeFile(file: string) {}

const fileName = 'not exist!';

try {
  console.log(readFile(fileName)); // Error 💩
} catch (error) {
  console.log(`caught !!`);
} finally {
  closeFile(fileName);
  console.log(`finally !!`);
}
