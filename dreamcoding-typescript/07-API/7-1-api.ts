/**
 * API 읽어 보기
 */

type Student = {
  passed: boolean;
};

const students: Student[] = [{ passed: true }, { passed: true }, { passed: false }];

const result = students.every((student) => student.passed);
console.log(result); // false
