import { useQuery } from 'react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import VideoCard from './VideoCard';
import { Item } from '../models/video/search';

interface ChannelPlaylistProps {
  channelId: string;
}

const ChannelPlaylist = ({ channelId }: ChannelPlaylistProps) => {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery<Item[]>(
    ['playlist', channelId],
    () => youtube.searchByChannelId(channelId),
    { staleTime: 1000 * 60 * 5 }
  );

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong...😭</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id.videoId} video={video} type='list' />
          ))}
        </ul>
      )}
    </>
  );
};

export default ChannelPlaylist;
