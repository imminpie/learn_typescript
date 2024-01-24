// 객체
let dog: {
  name: string;
  color: string;
} = {
  name: '돌돌이',
  color: 'brown',
};

console.log(dog.name); // 돌돌이

// 선택적 프로퍼티
let userA: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: '이정환',
};

userA = {
  name: '홍길동',
};

// 읽기 전용 프로퍼티
let userB: {
  id?: number;
  readonly name: string;
} = {
  id: 1,
  name: '이정환',
};

// userB.name = '홍길동'; // ❌ 오류 발생
