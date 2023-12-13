import { useLocation } from 'react-router-dom';

import { Item } from '../models/video/search';
import ChannelInfo from '../components/ChannelInfo';
import ChannelPlaylist from '../components/ChannelPlaylist';

interface VideoState {
  video: Item;
}

const VideoDetail = () => {
  const location = useLocation();
  const video = (location.state as VideoState).video; // 타입 단언 사용
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section className='flex flex-col lg:flex-low' aria-label='detailed video'>
      <article className='basis-4/6'>
        <iframe
          id='player'
          width='100%'
          height='640'
          src={`http://www.youtube.com/embed/${video.id}`}
          title={title}
        />
        <div className='p-8'>
          <h2 className='text-xl font-bold'>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className='whitespace-pre-wrap'>{description}</pre>
        </div>
      </article>
      <section className='basis-2/6' aria-label='related channel playlist'>
        <ChannelPlaylist channelId={channelId} />
      </section>
    </section>
  );
};

export default VideoDetail;
