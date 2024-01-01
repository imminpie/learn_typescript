/**
 * 맵드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

// 예제1 - 키와 값을 정의
type PartialUser = {
  [key in keyof User]?: User[key];
};

// 예제2 - 키와 값을 정의하는데, 값을 boolean 타입으로 정의한다.
type BooleanUser = {
  [key in keyof User]: boolean;
};

// 예제3 - 모든 프로퍼티를 읽기 전용으로 정의한다.
type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  return {
    id: 1,
    name: '홍길동',
    age: 18,
  };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {}

updateUser({
  //   id: 1,
  //   name: '홍길동',
  age: 20,
});
