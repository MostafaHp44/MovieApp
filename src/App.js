import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './components/App.css'
import NavBar from './components/NavBars';
import MovieList from './components/MovieList'
import MovieLists from './components/Moviedesc'

function App() {
  return (
    <div className="App">
           <NavBar />
           <MovieList/>

    </div>
  );
}

export default App;
