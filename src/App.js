import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title.js';
import Form from './components/Form.js';
import Movie from './components/Movie.js';

const API_KEY = '7c79e56035b17d50feca33ab82cd0cd9';

class App extends Component {

  getMovies = async() => {
      const api_call = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}');
      const data = await api_call.json();
      console.log(data);
  }

  render() {
    return (
     <div>
        <Title />
        <Form getMovies={this.getMovies} />
        <Movie />
     </div>
    );
  }
}

export default App;
