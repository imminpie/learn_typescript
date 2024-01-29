/**
 * 조건부 타입
 */
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string
let varB: StringNumberSwitch<string>; // number

// 예제
function removeSpaces<T>(text: T): T extends string ? string : undefined;

function removeSpaces(text: any) {
  // 오버로딩
  if (typeof text === 'string') {
    return text.replaceAll(' ', '');
  } else {
    return undefined;
  }
}

let result = removeSpaces('nice to meet you!');
let result2 = removeSpaces(undefined);
