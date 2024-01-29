/**
 * 프로미스와 제네릭
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

const result = new Promise<Post>((resolve, reject) => {
  setTimeout(() => {
    resolve({ id: 1, title: '제목', content: '내용' });
  }, 3000);
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
