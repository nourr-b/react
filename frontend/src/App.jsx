import './App.css'
import MovieCard from './components/MovieCard';
import Favorites from './components/pages/favorites';
import Favorite from './components/pages/favorites';
import Home from "./components/pages/home"
import NavBar from './components/NavBar';
import { Route,Routes } from 'react-router-dom';
// A component is really just any function in Javascript that returns some kind of jsx code
// components starts with a capital letter
// it needs to have some kind of parent level only one parent so we can make 2 divs in the same level
// what if i dont want to return a parent element? i can return the code inside a fragment

function App() {
  return (
    //this is a fragment exactly the next line
    // <></>
    <div>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </main>
    </div>
  )
}

export default App
