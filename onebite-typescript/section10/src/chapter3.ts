/**
 * Exclude<T, U>
 * T 에서 U 를 제거하는 타입이다.
 */
type A = Exclude<string | boolean, string>; // boolean
type B = Exclude<string | boolean, boolean>; // string

/**
 * Extract<T, U>
 * T로 부터 U를 추출하는 타입이다.
 */
type C = Extract<string | boolean, boolean>; // boolean
type D = Extract<string | boolean, string>; // string

/**
 * ReturnType<T>
 * T에 할당된 함수 타입의 반환값 타입을 추출하는 타입이다.
 */

function funcA() {
  return 'hello';
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>; // string

type ReturnB = ReturnType<typeof funcB>; // number
