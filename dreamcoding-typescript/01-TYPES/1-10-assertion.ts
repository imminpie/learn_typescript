{
  /**
   * 타입 단언 💩
   */

  // 방법1. as 키워드를 사용한다.
  let str1: any = 'Hello TS World!';
  let len1: number = (str1 as string).length;

  // 방법2. 각괄호를 사용한다.
  let str2: any = 'Hello TS World!';
  let len2: number = (<string>str2).length;
}
