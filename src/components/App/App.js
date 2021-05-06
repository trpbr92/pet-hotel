import React, {useEffect} from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Header from '../Header/Header';
import ManageOwners from '../ManageOwners/ManageOwners';
import Dashboard from '../Dashboard/Dashboard';
import './App.css';

function App() {
  return (
 <>
 <Header />
  <Router>
    <Route path="/" exact>
    <Dashboard />
  </Route>

  <Route path="/owners" exact>
    <ManageOwners />
  </Route>
 </Router>
 
 </>
  );
}

export default App;
