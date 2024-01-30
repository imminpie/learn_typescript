/**
 * infer
 */

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

function exampleFunction(arg: number): string {
  return arg.toString();
}

const result: ReturnType<typeof exampleFunction> = 'Hello';
console.log(result);
