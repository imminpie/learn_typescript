/**
 * 배열
 */

let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['hello', 'im', 'minpie'];
let boolArr: Array<boolean> = [true, false, true];

// 다양한 타입 요소를 갖는 배열 타입 정의하기
let multiArr: (number | string)[] = [1, 'hello'];

// 다차원 배열 타입 정의하기
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

/**
 * 튜플
 * 길이과 타입이 고정된 배열을 의미한다.
 */
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, '2', true];
// tup2 = [false, '3', 3]; 💩 순서 불일치
