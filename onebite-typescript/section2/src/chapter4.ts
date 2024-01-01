/**
 * 타입 별칭
 */

type Person = {
  name: string;
  age: number;
};

const person1: Person = {
  name: 'ellie',
  age: 12,
};

const person2: Person = {
  name: 'Steve',
  age: 18,
};

/**
 * 인덱스 시그니처
 * key 와 value 타입을 정의한다.
 */
type ContryCodes = {
  [key: string]: string;
};

let countryCodes: ContryCodes = {
  Korea: 'ko',
  UnitedStates: 'us',
  UnitedKingdon: 'uk',
};
