import './App.css';
import { Link } from 'react-router-dom';
import MyRoutes from './MyRoutes';

function App() {
  return (
    <div className='App'>
      <header>
        <img
          src='https://images.dog.ceo/breeds/retriever-golden/20200801_174527_200801.jpg'
          alt='logo'
        />
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/page1'>Page 1</Link>
          </li>
          <li>
            <Link to='/page2'>Page 2</Link>
          </li>
          <li>
            <Link to='/page3'>Page 3</Link>
          </li>
        </ul>
      </header>
      <MyRoutes />
    </div>
  );
}

export default App;
