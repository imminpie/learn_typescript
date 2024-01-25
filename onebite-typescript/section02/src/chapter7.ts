// Void
function func1(): string {
  return 'hello';
}

function func2(): void {
  console.log(`Hello!`);
}

// Never
function neverFunc(): never {
  while (true) {}
}

function throwError(message: string): never {
  throw new Error(message);
}
