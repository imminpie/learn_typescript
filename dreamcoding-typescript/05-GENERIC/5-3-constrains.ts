{
  /**
   * 제네릭 제약 조건
   */

  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log(`full time!!`);
    }

    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log(`part time!!`);
    }

    workPartTime() {}
  }

  // 제네릭 제약 조건
  // pay<T> 라고만 코드를 작성하면 T 형식에 pay 속성이 없다고 오류가 발생한다.
  // 왜냐하면, 컴파일러는 T 가 아직 어떤 타입인지 모르기 때문이다.
  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const steve = new FullTimeEmployee();
  const bob = new PartTimeEmployee();
  steve.workFullTime();
  bob.workPartTime();

  const steveAfterPay = pay(steve);
  const bobAfterPay = pay(bob);

  ///////////////////////////////////////////////////////

  const obj = {
    name: 'steve',
    age: 20,
  };

  // K extends keyof T
  // T 에 있는 key 만 사용할 수 있도록 제약
  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  console.log(getValue(obj, 'name')); // steve
  console.log(getValue(obj, 'age')); // 20
}
