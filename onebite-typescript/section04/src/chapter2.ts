/**
 * 함수 타입 표현식
 *
 * type 키워드를 사용하여 새로운 함수 타입을 정의한다.
 */
type Operation = (a: number, b: number) => number;

const add: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니처
 *
 * 함수 타입 표현식과 동일하게 함수의 타입을 별도로 정의하는 방식이다.
 */
type OperationB = {
  (a: number, b: number): number;
};

const sum: OperationB = (a, b) => a + b;

// 인터페이스를 사용하여 함수 타입을 정의할 수도 있다.
interface OperationC {
  (a: number, b: number): number;
}
