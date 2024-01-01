/**
 * 접근 제어자
 * public : 모든 범위에서 접근 가능. (default)
 * private : 클래스 내부에서만 접근 가능
 * proteced : 클래스 내부 또는 파생 클래스 내부에서만 접근 가능
 */

class Employee {
  // 생성자
  constructor(private name: string, protected age: number, public position: string) {}

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}
