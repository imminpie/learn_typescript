/**
 * 타입 가드
 * 조건문 등을 이용해 타입 범위를 좁혀서, 더 구체적이거나 정확한 타입으로 제한하는 작업이다.
 */

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

function login(state: LoginState) {
  switch (state.result) {
    case 'success': {
      console.log(`🎉 ${state.response.body}`);
      break;
    }
    case 'fail': {
      console.log(`😭 ${state.reason}`);
      break;
    }
    default:
      throw new Error(`no state...`);
  }
}

login({
  result: 'success',
  response: { body: 'logged in' },
});
