{
  /**
   * Index Type
   */

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; // string
  const text: Name = '123'; // 🙆‍♀️
  // const text: Name = 123; 💩

  type Gender = Animal['gender']; // 'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'

  const key: Keys = 'gender'; // 🙆‍♀️
  // const key: Keys = 'nice'; 💩

  type Person = {
    name: string;
    gender: Animal['gender']; // 'male' | 'female'
  };

  const person: Person = {
    name: 'steve',
    gender: 'male',
  };
}
