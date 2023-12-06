import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BsYoutube, BsSearch } from 'react-icons/bs';

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
        <BsYoutube />
        <h1 className='text-3xl'>Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={text} />
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  );
};

export default Header;
