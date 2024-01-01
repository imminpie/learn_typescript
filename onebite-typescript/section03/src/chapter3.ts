/**
 * Unknown 타입
 * 타입 계층도의 최상단에 위치한다.
 * unknown 타입 변수에는 모든 타입의 값을 할당할 수 있다.
 */

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = 'hello';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // let num: number = unknownVar; 💩
  // let str: string = unknownVar; 💩
  // let boal: boolean = unknownVar; 💩
  let anything: any = unknownVar; // 🙆‍♀️
}

/**
 * Never 타입
 * never 타입은 타입 계층도에서 가장 아래에 위치한다.
 * never 타입은 모든 타입으로 업캐스팅 할 수 있다.
 * 반대로 그 어떤 타입도 never 타입으로 다운 캐스팅 할 수 없다.
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let boal: boolean = neverFunc();

  // let never1: never = 10; 💩
  // let never2: never = 'string'; 💩
  // let never3: never = true; 💩
}

/**
 * Void 타입
 */
function voidExam() {
  function voidFunc(): void {
    console.log('hi');
  }

  let voidVar: void = undefined;
}

/**
 * Any 타입
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar = undefined;
  let neverVar: never;

  anyVar = unknownVar;
  unknownVar = anyVar;
  // neverVar = anyVar; 💩
}
