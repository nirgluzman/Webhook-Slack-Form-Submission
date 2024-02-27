import { useState } from 'react';

import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmitForm = e => {};

  return (
    <div className='flex'>
      <div className='w-1/2 container mx-auto mt-5'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 self-center'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
            Name
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            id='name'
            type='text'
            placeholder='Max Müller'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default App;
