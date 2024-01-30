/**
 * Exclude<T, K>
 *
 * 타입 T 에서 K 를 제거하는 새로운 타입을 만든다.
 */
type A = Exclude<string | number | boolean, number | boolean>; // string

/**
 * Extract<T, K>
 *
 * 타입 T 로부터 K 를 추출하여 새로운 타입을 만든다.
 */
type B = Extract<string | number | boolean, number>; // number

/**
 * ReturnType<T>
 *
 * 함수의 반환 값을 추출해 타입을 만든다.
 */
type C = ReturnType<(x: string) => number>; // number

// infer
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

function funcA() {
  return 'hello';
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>; // string
type ReturnB = ReturnType<typeof funcB>; // number
