/**
 * 인터페이스 선언 합치기
 *
 * 타입 별칭은 동일한 스코프 내에 중복된 이름으로 선언할 수 없는 반면 인터페이스는 가능하다.
 */
interface Person {
  name: string;
}

interface Person {
  age: number;
}

// 위 코드에 선언한 Person 인터페이스들을 결국 합쳐져 다음과 같은 인터페이스가 된다.
const person: Person = {
  name: '홍길동',
  age: 18,
};
