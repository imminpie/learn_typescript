/**
 * 인터페이스 확장하기
 */

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  breed: string;
}

interface Cat extends Animal {
  isScratch: boolean;
}

const dog: Dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도',
};

type Bird = {
  name: string;
  color: string;
};

/**
 * 타입 별칭 확장하기
 */
interface Chicken extends Bird {
  isFly: boolean;
}

const chicken: Chicken = {
  name: '치킨',
  color: 'brown',
  isFly: false,
};

/**
 * 다중 확장
 *
 * 여러 개의 인터페이스를 확장하는 것 또한 가능하다.
 */
interface Shape {
  color: string;
}

interface Dimensions {
  width: number;
  height: number;
}

interface Square extends Shape, Dimensions {
  sideLength: number;
}

const square: Square = {
  color: 'red',
  width: 10,
  height: 10,
  sideLength: 10,
};
