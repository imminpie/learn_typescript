/**
 * Union 타입
 */
type StringListOrNumberList = string[] | boolean[];

let strListOrBooleanList: StringListOrNumberList = ['A', 'B'];
strListOrBooleanList = [true, true, false];

type StrOrNumberList = (string | number)[];

let stringOrNumberList: StrOrNumberList = [1, 'A', 3];
stringOrNumberList = [1, 2, 3];
stringOrNumberList = ['A', 'B'];

/**
 * Intersection 타입
 */
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: '',
  color: '',
  language: '',
};
