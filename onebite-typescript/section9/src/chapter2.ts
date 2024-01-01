/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>; // string

let b: StringNumberSwitch<string>; // number

let c: StringNumberSwitch<number | string>;
// 1단계
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계
// string |
// number

// 결과
// string | number

let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계
// number |
// string |
// number

// 결과
// number | string | number 인데 number 가 중복되니까,
// string | number 가 된다.
//

/**
 * 실용적인 예제1
 */
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// number |
// never |
// boolean

// 결과
// number | never | boolean 인데,
// Union 타입에 never 는 올 수 없다. 따라서,
// number | boolean 가 된다.

/**
 * 실용적인 예제2
 */
type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2단계
// never
// string
// never

// 결과
// never | string | never 인데,
// Union 타입에 never 는 올 수 없다. 따라서,
// never 가 된다.
