// 타입 별칭
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

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
  Korea: string;
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
};
