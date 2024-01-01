/**
 * 원시타입
 * 하나의 값만 저장하는 타입
 */

//number
const num1: number = 10;
const num2: number = -6;
const num3: number = NaN;
const num4: number = Infinity;

// string
const str1: string = 'hello';
const str2: string = `hello ${str1}`;

// boolean
const boal1: boolean = true;
const boal2: boolean = false;

//undefined
// let age: undefined; 💩
let age: number | undefined;
age = undefined;
age = 1;

function find(): number | undefined {
  return undefined;
}

// null
// let peron: null; 💩
let person: string | null;

/**
 * 리터럴 타입
 * 하나의 값만 포함하도록 값 자체로 만들어진 타입이다.
 */

// 숫자 리터럴
// printScores = 200; 💩
type Scores = 100;
let printScores: Scores = 100;

// 문자 리터럴
// personName = 'hello'; 💩
type Name = 'name';
let personName: Name = 'name';

// 불리언 리터럴
// isTrue = false; 💩
type IsBoolean = true;
let isTrue: IsBoolean = true;
