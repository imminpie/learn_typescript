/**
 * Unknown 타입
 *
 * 타입 계층도에서 가장 위에 위치한다.
 */
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = 'Hello';
  let c: unknown = undefined;
}

/**
 * never 타입
 *
 * 타입 계층도에서 가장 아래에 위치한다.
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
}

/**
 * Void 타입
 */
function voidExam() {
  function voidFunc(): void {
    console.log(`hi`);
  }

  let voidVar: void = undefined;
}

/**
 * any 타입
 */
function anyExam() {
  let unknownVar: unknown;
  let undefinedVar: undefined;
  let anyVar: any;

  anyVar = undefinedVar;
  anyVar = unknownVar;
}
