{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // 기준이 되는 타입이 가지고 있는 key들 중에 필요한 것을 뽑아서 새로운 타입을 
  // 아래 코드처럼 만들 수 있다. 물론 기준이 되는 타입에 없는 key를 넣으려고 하면 에러 발생.
  type VideoMetadata = Pick<Video, 'id' | 'title'>;

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
}
