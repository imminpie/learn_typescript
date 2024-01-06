{
  /**
   * Omit Type
   * 기존 타입에서 특정 속성을 제외하고 새로운 타입을 생성한다.
   */

  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // Video 타입에서 url 과 data 속성을 제외하고 새로운 타입을 생성
  type VideoMetaData = Omit<Video, 'url' | 'data'>;

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
