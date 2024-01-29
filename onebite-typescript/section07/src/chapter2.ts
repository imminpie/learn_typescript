/**
 * 타입 변수 응용하기
 */

// 1. 만약 2개의 서로 다른 타입 변수가 필요하다면 다음과 같이 T, U 처럼 2개의 타입 변수를 사용한다.
function swap<T, U>(a: T, b: U): (T | U)[] {
  return [b, a];
}

const [a, b] = swap<string, number>('1', 2);

console.log(a); // 2
console.log(b); // 1

// 2. 다양한 배열 타입을 인수로 받는 제네릭 함수를 만들어야 한다면 다음과 같이 할 수 있다.
function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num = returnFirstValue<number>([0, 1, 2]);
let str = returnFirstValue<number | string>([1, 'hello', 'nice']);

// 3. 함수를 호출하고 인수로 전달할 수 있는 값의 범위에 제한을 둘 수 있다.
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

getLength('123'); // ✅

getLength([1, 2, 3]); // ✅

getLength({ length: 1 }); // ✅

// getLength(undefined); ❌

// getLength(null); ❌
