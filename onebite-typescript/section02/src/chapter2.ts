// 배열 타입
let numArr: number[] = [1, 2, 3];
const strArr: Array<string> = ['Java', 'Spring', 'TypeScript'];

// 다양한 타입 요소를 갖는 배열 타입 정의하기
let multiArr: (number | string)[] = [1, 'hello'];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, 'hello', true];

// 튜플은 왜 쓰는 걸까?
// 배열 인덱스마다의 타입과 순서를 완벽히 고정시킬 수 있다.
const users: [string, number][] = [
  ['이정환', 1],
  ['이아무개', 2],
  ['김아무개', 3],
  ['박아무개', 4],
];
