import './App.css'
import MovieCard from './components/MovieCard';
import Home from "./components/pages/home"
// A component is really just any function in Javascript that returns some kind of jsx code
// components starts with a capital letter
// it needs to have some kind of parent level only one parent so we can make 2 divs in the same level
// what if i dont want to return a parent element? i can return the code inside a fragment

function App() {
  return (
    //this is a fragment exactly the next line
    <> 
      <Home />
    </>
  )
}

export default App
