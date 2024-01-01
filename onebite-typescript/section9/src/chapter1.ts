/**
 * 조건부 타입
 */
type A = number extends string ? string : number; // number

type ObjeA = {
  a: number;
};

type ObjeB = {
  a: number;
  b: number;
};

type B = ObjeB extends ObjeA ? number : string; // number

/**
 * 제네릭과 조건부 타입
 */
// 예제1
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string
let varB: StringNumberSwitch<string>; // number

// 예제2 - 오버로딩
// 오버로딩 선언부
function removeSpaces<T>(text: T): T extends string ? string : undefined;

// 오버로딩 구현부
function removeSpaces<T>(text: any) {
  if (typeof text === 'string') {
    return text.replaceAll(' ', '');
  } else {
    return undefined;
  }
}

let result = removeSpaces('nice to meet you!'); // return string
result.toUpperCase();

let result2 = removeSpaces(undefined); // return undefined
