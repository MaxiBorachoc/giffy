import React from 'react';
import './App.css';
import SearchResults from './pages/SearchResults'
import Home from './pages/home'
import Detail from "./pages/Detail"

import {Link, Route} from "wouter"


function App() {
  
  return (
    <div className="App">
      <section className="App-content">
      
      <Link to="/" className="giffy">GIFFY</Link>
      
      <Route
        component={Home}
        path="/" 
      />

      <Route 
        component={SearchResults}
        path="/search/:keyword"
      /> 
    
    <Route 
      component={Detail}
      path="/gif/:id"
    />
      
      </section>
    </div>
  );
}

export default App;
