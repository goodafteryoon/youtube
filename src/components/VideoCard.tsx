import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

import { Item } from '../models/video/popular';
import { formatAgo } from '../utill/date';

register('ko', koLocale);
interface VideoCardProps {
  video: Item;
}

const VideoCard = ({ video }: VideoCardProps) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <li>
      <img className='w-full' src={thumbnails.medium.url} alt={title} />
      <div>
        <p className='font-semibold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
};

export default VideoCard;
