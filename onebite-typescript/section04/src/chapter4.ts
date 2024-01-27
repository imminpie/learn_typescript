/**
 * 함수 오버로딩
 *
 * 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법
 */

// 예제1
function func(a: number): void;
function func(a: number, b: number, c: number): void;

function func(a: number, b?: number, c?: number): void {
  if (typeof b === 'number' && typeof c === 'number') {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(1); // ✅
// func(1, 2); ❌
func(1, 2, 3); // ✅

// 예제2
function greet(name: string): string;
function greet(name: number): string;

function greet(value: string | number): string {
  if (typeof value === 'string') {
    return `Hello, ${value}!`;
  } else {
    return `Hello, ${value} years old person!`;
  }
}

console.log(greet('Steve'));
console.log(greet(100));