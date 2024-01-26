/**
 * 함수 타입 정의
 */

function func(a: number, b: number): number {
  return a + b;
}

func(1, 2);

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

add(1, 2);

/**
 * 함수의 매개변수
 */
function introduce(name: string, tall?: number): void {
  console.log(`name: ${name}`);
}

introduce('홍길동');

/**
 * 함수의 나머지 매개변수
 */

function addNumbers(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b);
}

console.log(addNumbers(1, 2));
console.log(addNumbers(1, 2, 3, 4));
console.log(addNumbers(1, 2, 3, 4, 5));
