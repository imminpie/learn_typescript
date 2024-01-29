/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair1: KeyPair<string, number> = {
  key: 'id',
  value: 1,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ['apple', 'banana'],
};

// 인덱스 시그니처와 함께 사용하기
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  id: '1',
};

let booleanMap: Map<boolean> = {
  isOpen: false,
};

// 예제
interface Student {
  type: 'student';
  school: string;
}

interface Developer {
  type: 'developer';
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const studentUser: User<Student> = {
  name: '홍길동',
  profile: {
    type: 'student',
    school: '한국대학교',
  },
};

goToSchool(studentUser);
