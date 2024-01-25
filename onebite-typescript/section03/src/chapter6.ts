/**
 * 타입 좁히기
 */

// typeof
let numOrString = Math.random() > 0.5 ? 1123 : 'Hello!';

if (typeof numOrString === 'string') {
  numOrString.toUpperCase();
} else {
  numOrString.toFixed();
}

// instanceof
let dateOrString: Date | string = Math.random() > 0.5 ? new Date() : 'Hello!';

if (dateOrString instanceof Date) {
  dateOrString.getTime();
} else {
  dateOrString.toUpperCase();
}

// in
type Human = {
  name: string;
  age: number;
};

type Dog = {
  name: string;
  type: string;
};

let human: Human = {
  name: '안유진',
  age: 23,
};

let dog: Dog = {
  name: '오리',
  type: 'Yorkshire Terrier',
};

let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;

if ('type' in humanOrDog) {
  console.log(humanOrDog.type);
} else {
  console.log(humanOrDog.age);
}

// 타입 좁히기 활용
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
