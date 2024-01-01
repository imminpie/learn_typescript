/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호화성
 * 모든 객체 타입은 각각 다른 객체 타입들과 부모-자식 관계를 갖는다.
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: '기린',
  color: 'yellow',
};

let dog: Dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도',
};

animal = dog;
// dog = animal; 💩

/**
 * 초과 프로퍼티 검사
 * 객체 생성 시 정의되지 않은 프로퍼티가 포함되는 경우 발생하는 현상이다.
 * 부모 타입 객체에
 */
type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book = {
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  // skill: 'reactjs', 💩`
};

let programmingBook: ProgrammingBook = {
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  skill: 'reactjs',
};
