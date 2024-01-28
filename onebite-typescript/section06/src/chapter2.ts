/**
 * 접근제어자
 *
 * 1. 생성자 매개변수에 접근 제어자를 설정하면 동일한 이름의 필드를 선언할 수 없다.
 * 2. 접근 제어자가 설정된 매개변수는 this.필드 = 매개변수 작업이 자동으로 수행된다.
 */

class Employee {
  constructor(private name: string, protected age: number, public position: string) {}
}
