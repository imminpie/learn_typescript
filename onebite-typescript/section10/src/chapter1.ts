/**
 * Partial<T>
 *
 * T 타입의 모든 프로퍼티를 옵셔널로 만든다.
 */
interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = Partial<User>;

const user: PartialUser = {};

/**
 * Required<T>
 *
 * T 타입의 모든 프로퍼티를 필수로 만든다.
 */
interface Person {
  name?: string;
  age?: number;
}

type RequiredPerson = Required<Person>;

/**
 * Readonly
 *
 * 타입의 모든 프로퍼티를 읽기 전용 프로퍼티로 변환한다.
 */
type ToDo = {
  title: string;
  description: string;
};

function display(todo: Readonly<ToDo>) {
  // todo.title = 'nice'; 💩
}
