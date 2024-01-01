/**
 * infer R
 * inference -> 추론하다.
 */

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>; // return string

type B = ReturnType<FuncB>; // return number

type C = ReturnType<number>; // return never

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>; // number

type PromiseB = PromiseUnpack<Promise<string>>; // string
