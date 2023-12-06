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
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
      <Link to='/' className='flex items-center'>
        <BsYoutube className='text-4xl text-brand' />
        <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
      </Link>
      <form className='w-full flex justify-center' onSubmit={handleSubmit}>
        <input
          className='w-7/12 p-2 ouline-none bg-black text-gray-50'
          type='text'
          onChange={handleChange}
          value={text}
          placeholder='Search...'
        />
        <button className='bg-zinc-600 px-4'>
          <BsSearch />
        </button>
      </form>
    </header>
  );
};

export default Header;
