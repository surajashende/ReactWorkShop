import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import MyFunction from './components/MyFunction'
import Create from './components/Create';
import ChoreList from './components/ChoreList'
import Movie from './components/Movie'
import RandomImage from './components/RandomImage'
import { Component } from 'react';
import Home from './components/Home'
function App() {
  return (
    <div className="App">
    <Home/>
     <Movie/>
    <ChoreList/>
    <RandomImage/>
    </div>
  );
}

export default App;
