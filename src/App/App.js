import React from 'react';

import './App.css'
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';


export default function App() {
  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar/>
    </div>
  );
}