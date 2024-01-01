/**
 * Void
 * 일반적으로 함수에서 반환 값이 없을 때 반환 타입을 표현하기 위해 사용한다.
 */
function print(): void {
  console.log('hello');
}

/**
 * Never
 * 절대 발생할 수 없는 타입을 나타낸다.
 * 이는 항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않음을 의미한다.
 */

// 무한루프
function func3(): never {
  while (true) {
    {
    }
  }
}

// 에러발생
function throwError(message: string): never {
  throw new Error(message);
}
