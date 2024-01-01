/**
 * 제네릭
 */
function func<T>(value: T): T {
  return value;
}

let num = func(10); // number
let str = func('Hello!'); // string
let arr = func<[number, number, number]>([1, 2, 3]); // array
