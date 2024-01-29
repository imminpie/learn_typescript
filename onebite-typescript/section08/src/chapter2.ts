/**
 * Keyof 연산자
 */

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: '홍길동',
  age: 18,
};

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

/**
 * typeof 연산자
 *
 * 객체 데이터를 객체 타입으로 변환해주는 연산자이다.
 */
const user = {
  name: '홍길동',
  age: 18,
};

type User = typeof user;

const userA: User = {
  name: '홍길순',
  age: 22,
};

/**
 * Typeof 와 Keyof 함께 사용하기
 */
function getPropertyKeyExam(person: Person, key: keyof typeof person) {
  return person[key];
}
