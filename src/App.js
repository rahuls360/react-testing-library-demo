import './App.css';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div className='App'>
      <header>
        <img
          src='https://images.dog.ceo/breeds/retriever-golden/20200801_174527_200801.jpg'
          alt='logo'
        />
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/page1'>Page 1</a>
          </li>
          <li>
            <a href='/page2'>Page 2</a>
          </li>
          <li>
            <a href='/page3'>Page 3</a>
          </li>
        </ul>
      </header>
      <main>
        <h1>Welcome to the website</h1>
        <button onClick={handleChangeTheme}>Toggle theme</button>
        <div>Current theme: {theme}</div>
      </main>
    </div>
  );
}

export default App;
