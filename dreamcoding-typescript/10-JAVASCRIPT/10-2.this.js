/**
 * This
 * 누가 호출하느냐에 따라 달라진다.
 */

console.log(this); // window

function simpleFunc() {
  console.log(this); // window
}

simpleFunc(); // window.simpleFunc(); 랑 동일하기 때문이다.

/////////////////////////////////////////////////////////////

class Counter {
  count = 0;
  increase = () => {
    console.log(this); // Counter
  };
}

const counter = new Counter();
counter.increase();

// 단, 반드시 화살표 함수를 사용해야 한다.
// 화살표 함수를 사용하지 않는다면 this 는 undefined 가 된다.
const caller = counter.increase;
caller();

/////////////////////////////////////////////////////////////

class Bob {}

const bob = new Bob();
bob.run = counter.increase;
bob.run(); // this == Bob
