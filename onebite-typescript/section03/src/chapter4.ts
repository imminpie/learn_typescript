/**
 * 타입추론
 */

// 1. 변수 선언
let booleanType = true; // boolean

// 2. 구조 분해 할당
const user = {
  id: 1,
  name: '홍길동',
};

const { id, name } = user; // number string

// 3. 함수의 반환 값
function funcExam() {
  return 'hello';
}

funcExam(); // string

function defaultFuncExam(val = 'hello') {
  return val;
}

defaultFuncExam(); // string
