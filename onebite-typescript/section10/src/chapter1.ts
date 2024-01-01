/**
 * Partial<T>
 * 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 만들어준다.
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const draft: Partial<Post> = {
  title: '제목 모름',
  content: '내용 모름',
};

/**
 * Required<T>
 * 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 만들어준다.
 */

const withThumbnailPost: Required<Post> = {
  title: '한입 타스 후기',
  tags: ['ts'],
  content: '',
  thumbnailURL: '반드시 정의해야 합니다',
};

/**
 * Readonly<T>
 * 특정 객체 타입의 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어준다.
 */

const readonlyPost: Readonly<Post> = {
  title: '보호된 게시글입니다',
  tags: [],
  content: '',
};

// readonlyPost.content = ''; 💩
