/**
 * 템플릿 리터럴 타입
 */

type Color = 'red' | 'black' | 'green';

type Animal = 'dog' | 'cat' | 'chicken';

type ColoredAnimal = `${Color}-${Animal}`;

const blackCat: ColoredAnimal = 'black-cat';
const greenCat: ColoredAnimal = 'green-cat';
const redCat: ColoredAnimal = 'red-cat';
