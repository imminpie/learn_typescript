/**
 * 분산 조건부 타입
 * 
 * 타입 T 에서 U 에 해당하는 부분을 제외한 타입을 생성한다.
 */
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<string | number>; // number | string

/**
 * Exclude
 */
type Exclude<T, U> = T extends U ? never : T;

type varB = Exclude<number | string | boolean, string>; // number | never | boolean

// 여기서 never 타입은 Union 으로 묶일 경우 사라진다.
// 따라서 최종 타입은 number | boolean 타입이 된다. 