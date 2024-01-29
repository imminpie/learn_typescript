/**
 * 템플릿 리터럴 타입
 *
 * 템플릿 리터럴을 이용해 특정 패턴을 갖는 문자열 타입을 만드는 기능이다.
 */

// 예제1
type Color = 'black' | 'brown';
type Animal = 'dog' | 'cat';

type ColorAnimal = `${Color}-${Animal}`;

const blackCat: ColorAnimal = 'black-cat';
const brownDog: ColorAnimal = 'brown-dog';

// 예제2
type Point = { x: number; y: number };

type PointString = `${Point['x']},${Point['y']}`;

const point: Point = { x: 10, y: 20 };

const pointString: PointString = `${point.x},${point.y}`;

console.log(pointString); // 10,20
