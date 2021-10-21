import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/Navbar';
import Expense from './components/expenseTracker/Expense';

import ('./App.css')

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>

            <Route exact path="/">
              <Expense />
          </Route>

            <Route exact path="/register">
              <Register />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

          </Switch>
        </div>
      </Router>
    </>

  );
}

export default App;