/**
 * Pick<T, K>
 *
 * 타입 T 에서 특정 프로퍼티를 선택하여 새로운 타입을 만든다.
 * T 가 name, age 가 있는 객체 타입이고 K 가 name 이라면 결과는 name 만 존재하는 객체 타입이 된다.
 */
interface Person {
  name: string;
  age: number;
  gender: string;
}

type PersonNameAndAge = Pick<Person, 'name' | 'age'>;

const person1: PersonNameAndAge = {
  name: '홍길동',
  age: 18,
};

/**
 * Omit<T, K>
 *
 * 타입 T 에서 특정 프로퍼티를 제거한 새로운 타입을 만든다.
 */
type PersonWithoutGender = Omit<Person, 'gender'>;

const person2: PersonNameAndAge = {
  name: '홍길동',
  age: 18,
};

/**
 * Record<K,V>
 *
 * 타입의 키와 값의 타입을 모두 동일하게 설정할 수 있다.
 * K 는 키의 타입을, T 는 값의 타입을 나타낸다.
 */
type RecordPerson = Record<string, string>;

const person3: RecordPerson = {
  name: '홍길동',
  age: '18',
  gender: 'male',
};
