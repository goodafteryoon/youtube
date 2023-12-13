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
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
};

export default VideoCard;
