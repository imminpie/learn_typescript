/**
 * Type Alias 와 Interface 뭘 써야 할까?
 */

type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// object 둘 다 가능 🙆‍♀️
const obj1: PositionType = {
  x: 1,
  y: 1,
};

const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
};

// class Inheritance 둘 다 가능 🙆‍♀️
class Post1 implements PositionType {
  x: 1;
  y: 1;
}

class Post2 implements PositionInterface {
  x: 1;
  y: 1;
  z: 1;
}

// Extends 둘 다 가능 🙆‍♀️
type ZPositionType = PositionType & { z: number }; // Intersection Types: AND 활용

interface ZPositionInterface extends PositionInterface {
  z: number;
}

// 결합: 인터페이스만 가능하다! 🤔
interface PositionInterface {
  z: number;
}

// 계산된 프로퍼티 : 타입만 가능하다! 🤔
type Person = {
  name: string;
  age: number;
};

type Name = Person['name']; // string
type NumberType = number;
type Direction = 'left' | 'right';
