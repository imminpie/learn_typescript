/**
 * 타입 단언
 * 개발자가 컴파일러에게 특정 값의 타입을 확신시켜주는 것을 말한다.
 */

let variable: any = 'Hello, TypeScript!';
let len1: number = (variable as string).length;
let len2: number = (<string>variable).length;
