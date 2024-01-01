/**
 * Union: OR
 */

type Direction = 'right' | 'left' | 'up' | 'down';

const move = function (direction: Direction) {
  console.log(direction);
};

move('up');

type SuccessState = {
  result: 'success';
  response: {
    body: string;
  };
};

type FailState = {
  result: 'fail';
  reason: string;
};

type LoginState = SuccessState | FailState;

function printLoginState(state: LoginState) {
  if (state.result === 'success') {
    console.log(`🎉 ${state.response.body}`);
  } else {
    console.log(`😭 ${state.reason}`);
  }
}

printLoginState({
  result: 'success',
  response: { body: 'logged in' },
});

//////////////////////////////////////////////////////

/**
 * Intersection: AND
 */
type Student = {
  name: string;
  score: number;
};

type Employee = {
  employeeId: number;
  work: () => void;
};

function interWork(person: Student & Employee) {
  console.log(person.name);
}

interWork({
  name: '홍길동',
  score: 90,
  employeeId: 1,
  work: () => {},
});
