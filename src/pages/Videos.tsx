import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Item } from '../models/video/popular';
import VideoCard from '../components/VideoCard';
import axios from 'axios';

const Videos = () => {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery<Item[]>(['videos', keyword], async () => {
    return axios
      .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
      .then((res) => res.data.items);
  });

  return (
    <>
      <div>Videos {keyword ? `🔍${keyword}` : '🔥'}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong...😭</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Videos;
