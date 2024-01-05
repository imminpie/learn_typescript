{
  /**
   * Mapped Type
   * 기존에 정의되어 있는 타입을 새로운 타입으로 변환해 주는 문법
   */

  type Video = {
    title: string;
    author: string;
  };

  // 선택적 프로퍼티
  type Optional<T> = {
    [P in keyof T]?: T[P];
  };

  type VideoOptional = Optional<Video>;

  // 읽기 전용 프로퍼티
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoReadOnly = ReadOnly<Video>;

  /////////////////////////////////////////////////////////

  type Nullable<T> = { [P in keyof T]: T[P] | null };

  const obj: Nullable<Video> = {
    title: 'Title',
    author: null,
  };
}
