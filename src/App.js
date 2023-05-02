// React importation
import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';

// Styles importation
import './style/App.css';

// Pages importation
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Contact from './pages/Contact';

// Components importation
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      {/* Routage */}
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/recipes" Component={Recipes} />
        <Route exact path="/contact" Component={Contact} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
