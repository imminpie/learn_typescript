/**
 * 인덱스드 엑세스 타입
 *
 * 객체, 배열, 튜플 타입에서 특정 프로퍼티 혹은 요소의 타입을 추출하는 타입이다.
 */

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];

const post: PostList[number] = {
  title: '제목',
  content: '내용',
  author: {
    id: 1,
    name: '홍길동',
  },
};

function printAuthorInfo(author: PostList[number]['author']) {
  console.log(`${author.id}-${author.name}`);
}

printAuthorInfo(post.author);
