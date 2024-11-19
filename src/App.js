import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Games from './pages/Games'
import Blog from './pages/Blog'
// import Navbar from './components/Navbar'

function App() {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-[url(https://opengameart.org/sites/default/files/styles/medium/public/space-tiled%20background-256x256%20by%20alpha%20rats_1.png)]'>
      <div className='w-[1200px] h-full text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/games' element={<Games />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
