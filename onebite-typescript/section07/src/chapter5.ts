/**
 * 프로미스
 * resolve 는 unknown 타입으로 추론된다.
 * reject 는 any 타입으로 추론된다.
 */

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(100);
    reject('~때문에 실패했습니다.');
  }, 3000);
});

promise.then((response) => {
  console.log(response); // 100
});

promise.catch((err) => {
  if (typeof err === 'string') {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: '게시글 제목',
        content: '게시글 내용',
      });
    }, 3000);
  });
}

const postRequest = fetchPost();
postRequest.then((response) => {
  console.log(response.id);
  console.log(response.title);
  console.log(response.content);
});
