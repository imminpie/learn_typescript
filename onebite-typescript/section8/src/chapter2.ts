/**
 * keyof 연산자
 * 객체의 모든 키를 Union 타입으로 추출한다.
 */

// 방법1
interface Person {
  name: string;
  age: number;
}

// keyof Person ==> name | age
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: '홍길동',
  age: 18,
};

getPropertyKey(person, 'name');

/**
 * 방법2
 * typeof animal ==> const animal = {
 *     name: '멍멍이',
 *     breed: '진돗개',
 * }
 */
type Animal = typeof animal;

function getAniamlPropertyKey(animal: Animal, key: keyof typeof animal) {
  return animal[key];
}

const animal = {
  name: '멍멍이',
  breed: '진돗개',
};
