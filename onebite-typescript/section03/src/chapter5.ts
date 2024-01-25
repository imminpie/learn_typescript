/**
 * 타입 단언
 */
let str: any = 'Hello TS World!';
let len: number = (str as string).length;

/**
 * 다중 단언
 */
let num = 10 as unknown as string;

/**
 * const 단언
 */
const yuJin = {
  name: '안유진',
  age: 2003,
} as const;

// yuJin.name = '장원영'; 💩

/**
 * Not null 단언
 */
type Post = {
  title: string;
};

let post: Post = {
  title: '게시글',
};

const count: number = post.title!.length;
