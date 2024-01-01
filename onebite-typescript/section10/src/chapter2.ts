/**
 * Pick<T, K>
 * 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입이다.
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// Post 인터페이스에서 title 과 content 만을 선택한 새로운 타입을 생성한다.
// 따라서 tags 를 정의하지 않더라도 에러가 발생하지 않는다.
const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: '옛날 글',
  content: '옛날 컨텐츠',
};

/**
 * Omit<T, K>
 * 객체 타입으로부터 특정 프로퍼티를 제거하는 타입이다.
 */

// Post 인터페이스에서 title 프로퍼티만 제거한 세로운 타입을 생성한다.
const noTitlePost: Omit<Post, 'title'> = {
  content: '',
  tags: [],
  thumbnailURL: '',
};

/**
 * Record<K,V>
 */

// type Thumbnail = {
//   large: {
//     url: string;
//   };
//   medium: {
//     url: string;
//   };
//   small: {
//     url: string;
//   };
// };

type Thumbnail = Record<'large' | 'medium' | 'small', { url: string }>;
