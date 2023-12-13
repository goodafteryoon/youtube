import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { Item } from '../models/video/search';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

const Videos = () => {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery<Item[]>(['videos', keyword], () => youtube.search(keyword), {
    staleTime: 1000 * 60 * 1,
  });

  return (
    <>
      <div>Videos {keyword ? `🔍${keyword}` : '🔥'}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong...😭</p>}
      {videos && (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
          {videos.map((video) => (
            <VideoCard key={video.id.videoId} video={video} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Videos;
