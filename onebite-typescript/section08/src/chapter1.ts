/**
 * 인덱스드 엑세스 타입
 */

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo(author: PostList[number]['author']) {
  console.log(`${author.name}-${author.id}`);
}

// 아래 배열 리스트를 추출하는 코드임
const post: PostList[number] = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: '홍길동',
    age: 18,
  },
};
// const posts: PostList = [
//   {
//     title: '게시글 제목1',
//     content: '게시글 본문1',
//     author: {
//       id: 1,
//       name: '홍길동',
//       age: 18,
//     },
//   },
//   {
//     title: '게시글 제목2',
//     content: '게시글 본문2',
//     author: {
//       id: 2,
//       name: '홍길동',
//       age: 18,
//     },
//   },
// ];

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
type TupNum = Tup[number];
