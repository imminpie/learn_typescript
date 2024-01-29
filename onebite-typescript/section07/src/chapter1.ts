/**
 * 제네릭
 */

function func<T>(value: T): T {
  return value;
}

let str = func<string>('hi!');
let num = func<number>(100);
let tup = func<[number, number, number]>([1, 2, 3]);
let arr = func<number[]>([1, 2, 3]);
