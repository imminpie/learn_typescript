/**
 * 선언 합침
 */

// 타입 별칭은 동일한 스코프 내에 중복된 이름으로 선언할 수 없는 반면 인터페이스는 가능하다.
interface Person {
  name: string;
}

interface Person {
  age: number;
}

// 따라서 위 코드에 선언한 Person 인터페이스들은 자동으로 합쳐져 다음과 같이 사용할 수 있다.
const person: Person = {
  name: '홍길동',
  age: 18,
};
