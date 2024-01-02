{
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  function fetchNum(id: string): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // 선택적 매개변수 설정
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('Steve', 'Jobs'); // Steve Jobs
  printName('Tom'); // Tom undefined

  // 매개변수 기본값 설정
  function printMessage(message: string = 'default message') {
    console.log(message);
  }

  printMessage(); // default message

  // 나머지 매개변수
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5));
}
