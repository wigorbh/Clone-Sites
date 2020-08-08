import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginForm from './components/LoginForm';

import './style/App.css'
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage}/>
        <Route path="/login" component={LoginForm} />
        <Route path="/" component={''}/>
      </Switch>
    </Router>
  );
}

export default App;
