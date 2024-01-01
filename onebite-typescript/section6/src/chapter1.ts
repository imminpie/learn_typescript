class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log('일을 합니다.');
  }
}

const employeeA = new Employee('홍길동', 28, '개발자');
employeeA.work();

// 클래스도 타입이다.
const employeeB: Employee = {
  name: '홍길동',
  age: 28,
  position: '개발자',
  work() {
    console.log('프로그램 개발을 합니다.');
  },
};

// 상속
class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
