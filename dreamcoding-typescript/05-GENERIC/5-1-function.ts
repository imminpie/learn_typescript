{
  /**
   * 제네릭
   */

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error(`not valid number!`);
    }
    return arg;
  }

  const num: number = checkNotNull(123);
  const str: string = checkNotNull('123');
  const boal: boolean = checkNotNull(true);
}
