/**
 * 클래스
 */

class Student {
  name;
  grade;
  age;

  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  study() {
    console.log('열심히 공부합니다.');
  }

  introduce() {
    console.log(`이름: ${this.name}, 학점: ${this.grade}, 나이: ${this.age}`);
  }
}

const studentA = new Student('홍길동', 'A+', 15);
studentA.study(); //열심히 공부합니다.
studentA.introduce(); // 이름: 홍길동, 학점: A+, 나이: 15

// 상속

class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 합니다.`);
  }
}

const studentB = new StudentDeveloper('김길동', 'B+', 13, '자바스크립트');
studentB.programming(); // 자바스크립트로 프로그래밍 합니다.
