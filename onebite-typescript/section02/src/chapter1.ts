/**
 * 원시타입
 */

// number
const num1: number = 10;
const num2: number = -6;

// string
const str1: string = 'hello';
const str2: string = `hello ${str1}`;

// boolean
const bool1: boolean = true;
const bool2: boolean = false;

// undefined
// let age: undefined; ❌
let age: number | undefined;
age = undefined;
age = 1;

// null
// let peron: null; ❌
let person: string | null;

/**
 * 리터럴 타입
 */

let num: 10;
num = 10;
// num = 20; ❌ ERROR

let strA: 'Hello!';
strA = 'Hello!';
// strA = 'Hi!'; ❌

let boolA: true = true;
boolA = true;
// boolA = false; ❌
