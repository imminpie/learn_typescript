/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  sayHi?: () => void;
}

const person: Person = {
  name: '홍길동',
  age: 18,
};

const person2: Person = {
  name: '홍길동',
};

// person.name = '홍길동'; 💩

type Type1 = number | string | Person;
type Type2 = number & string & Person;

const person3: Person | string = {
  name: '홍길동',
  age: 18,
};
