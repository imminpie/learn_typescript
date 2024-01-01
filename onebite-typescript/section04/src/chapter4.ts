/**
 * 함수 오버로딩
 */

// 1. 타입스크립트에서 함수 오버로딩을 구현하려면 먼저 선언부를 만들어 줘야 한다.
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 2. 구현
function func(a: number, b?: number, c?: number): void {
  if (typeof b === 'number' && typeof c === 'number') {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(1); // ✅
// func(1, 2); 💩
func(1, 2, 3); // ✅
