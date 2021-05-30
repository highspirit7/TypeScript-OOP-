{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // Video 타입에 없는 키를 넣어도 에러는 나지 않는다. 
  // 타입 정의된 문서에 K extends keyof any 라고 되어 있기 때문이다.
  type VideoMetadata = Omit<Video, 'url' | 'data'>;

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data..',
    };
  }
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: 'title',
    };
  }

  /** Omit 유틸리티 타입
   * 특정 타입에서 불필요한 key들을 제외하고 사용하고 싶을 때 활용할 수 있는 타입.
   * 일부 타입을 제외시키는 것이 더 적합하고 간편하다면 Omit을 사용할 수 있고 
   * 그 반대의 상황이라면 Pick 유틸리티 타입을 사용할 수 있다.
   */
}
