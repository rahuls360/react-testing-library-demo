import React, { useState } from 'react';

function Home() {
  const [theme, setTheme] = useState('light');
  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <main>
      <h1>Welcome to the website</h1>
      <button onClick={handleChangeTheme}>Toggle theme</button>
      <div>Current theme: {theme}</div>
    </main>
  );
}

export default Home;
