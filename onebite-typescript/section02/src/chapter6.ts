/**
 * Any 💩
 * 모든 타입을 허용한다.
 * never 을 제외한 모든 타입의 부모 타입이 될 수 있다.
 */

let anything: any = 0;
anything = 'hello';

/**
 * Unknown
 * 타입 계층도의 최상단에 위치한다.
 * unknown 타입 변수에는 모든 타입의 값을 할당할 수 있다.
 */
let notSure: unknown;
notSure = 'he';
notSure = true;
notSure = 3;
notSure = () => {};
