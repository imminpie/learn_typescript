{
  /**
   * JavaScript
   * Primitive: number, string, boolean, symbol, ull, undefined
   * Object: function, array...
   */

  // number
  const num: number = 10;

  // string
  const str: string = 'Hello TS World';

  // boolean
  const boal: boolean = true;

  // undefined
  // let name: undefined; 💩
  let name: string | undefined;

  // null
  // let age: null; 💩
  let person: string | null;

  // unknown : 어떤 타입의 데이터가 담길지 알 수 없음을 나타내는 타입이다. 💩
  let notSure: unknown;
  notSure = 'he';
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    console.log('Hello TS World!');
  }

  // never
  function neverFunc(): never {
    while (true) {}
  }

  function throwError(message: string): never {
    throw new Error(message);
  }
}
