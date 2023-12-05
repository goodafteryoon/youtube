import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Header = () => {
  const [text, setText] = useState('');
  const { keyword } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  useEffect(() => setText(keyword ? keyword : ''), [keyword]);

  return (
    <header>
      <Link to='/'>
        <h1>🎥 Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={text} />
        <button>🔍</button>
      </form>
    </header>
  );
};

export default Header;
