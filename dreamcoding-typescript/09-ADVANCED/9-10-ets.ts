{
  /**
   * Capitalize
   * 문자열의 첫 글자를 대문자로 변환한다.
   */
  type Product = 'cat' | 'dog';
  type NewProduct = Capitalize<Product>;

  const cat: NewProduct = 'Cat';
  // const cat: NewProduct = 'cat'; 💩
}
