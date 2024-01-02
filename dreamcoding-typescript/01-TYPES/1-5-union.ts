{
  /**
   * Union Types: OR
   */

  // 예제1
  type Direction = 'right' | 'left' | 'up' | 'down';

  const move = function (direction: Direction) {
    console.log(direction);
  };

  move('up');

  // 예제2
  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(state: LoginState) {
    if ('response' in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }

  login({
    response: { body: 'logged in' },
  });
}
