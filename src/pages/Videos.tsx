import { useParams } from 'react-router-dom';

const Videos = () => {
  const { keyword } = useParams();

  return <div>{keyword ? `${keyword} 🔍` : 'All of'} Videos 페이지입니다</div>;
};

export default Videos;
