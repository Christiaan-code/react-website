import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './components/pages/Home';
import Footer from './components/Footer';
import Register from './components/pages/Register.js'
import Login from './components/pages/Login.js'
import Upload from './components/pages/Upload.js'
// import Contact from './components/pages/Contact'

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Login}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/register' exact component={Register}/>
            <Route path='/upload' exact component={Upload}/>
          </Switch>
          <Footer />
        </Router>
    </>
  );
}

export default App;