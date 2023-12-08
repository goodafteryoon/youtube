import { Item } from '../models/video/popular';

interface VideoCardProps {
  video: Item;
}

const VideoCard = ({ video }: VideoCardProps) => {
  return <p>{video.snippet.title}</p>;
};

export default VideoCard;
