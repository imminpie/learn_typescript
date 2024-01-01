/**
 * 인터페이스 확장
 */

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  breed: string;
}

interface Cat extends Animal {
  name: '야옹이';
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

const dog: Dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도',
};

const cat: Cat = {
  name: '야옹이',
  // name: '고양이', 💩
  color: 'black',
  isScratch: true,
};

// 다중 확장
interface Student {
  name: string;
}

interface Employee {
  name: string;
}

interface Person extends Student, Employee {
  doSomething(): void;
}

const person: Person = {
  name: '홍길동',
  doSomething: function () {
    console.log('공부를 한다.');
  },
};
