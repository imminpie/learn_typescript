{
  /**
   * Pick Type
   * 기존 타입에서 특정 속성만을 선택하여 새로운 타입을 생성
   */

  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // Video 타입에서 id 와 title 정보만 이용한 새로운 타입을 생성
  type VideoMetaData = Pick<Video, 'id' | 'title'>;

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://',
      data: 'byte-data...',
    };
  }

  function getVideoMetaData(id: string): VideoMetaData {
    return {
      id,
      title: 'title',
    };
  }
}
