/**
 * 함수 타입의 호환성
 *
 * 함수를 할당할 때, 해당 함수의 매개변수 타입과 반환 타입이 다른 함수의 매개변수 타입과 반환 타입과 호환되는지를 결정하는 규칙을 의미한다.
 */

// 1. 반환 타입의 호환성
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; ❌

// 2. 매개변수 타입의 호환성
// 함수의 매개변수 타입이 더 구체적인 방향으로 할당될 때 호환된다.
// 예제1
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; ❌
d = c;

// 예제2
type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; ❌
dogFunc = animalFunc;

// 예제3
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; ❌
