/**
 * 인터페이스
 */
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: '홍길동',
  age: 18,
};

/**
 * 선택적 프로퍼티
 */
interface Animal {
  name: string;
  age?: number;
}

const dog: Animal = {
  name: '돌돌이',
};

/**
 * 읽기 전용 프로퍼티
 */
interface Board {
  readonly id: number;
  title: string;
  contents: string;
}

const board: Board = {
  id: 1,
  title: '제목',
  contents: '내용',
};

console.log(board.id);
// board.id = 2; ❌

/**
 * 메서드 타입 정의하기
 */
interface Person2 {
  name: string;
  sayHi(): void; // 메서드 표기법
}

interface Person3 {
  name: string;
  sayHi: () => void; // 화살표 함수 표기법
}

/**
 * 메서드 오버로딩
 *
 * 화살표 함수 표기법은 메서드의 오버로딩을 지원하지 않는다.
 */
interface Person4 {
  name: string;
  sayHi: () => void;
  // sayHi: (a: number) => void; ❌
  // sayHi: (a: number, b: number) => void; ❌
}

// 메서드 표기법으로 메서드 타입을 정의하면 오버로딩 구현이 가능하다.
interface Person5 {
  name: string;
  sayHi(): void;
  sayHi(a: number): void;
  sayHi(a: number, b: number): void;
}
