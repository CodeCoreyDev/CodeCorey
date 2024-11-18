import React from 'react';
import Navbar from './components/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Games from './pages/Games';
import Blog from './pages/Blog';

function App() {
    return (
        <div className="App flex flex-col items-center h-screen">
            <Navbar />
            <div className='Main w-[1200px] h-full bg-gray-600/20'>
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
