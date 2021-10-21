import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/Navbar';
import Expense from './components/expenseTracker/Expense';
import Calendar from './components/classScheduler/Calendar';
import TransactionState from './context/transactions/TransactionState';
import UserState from './context/users/UserState';
import Home from './components/Home';
import('./App.css')

function App() {

  return (
    <>
      <UserState>
        <TransactionState>
          <Router>
            <Navbar />
            <div className="container">
              <Switch>

                <Route exact path="/">
                  <Home />
                </Route>

                <Route exact path="/register">
                  <Register />
                </Route>

                <Route exact path="/login">
                  <Login />
                </Route>

                <Route exact path="/expense">
                  <Expense />
                </Route>

                <Route exact path="/classScheduler">
                  <Calendar />
                </Route>

              </Switch>
            </div>
          </Router>
        </TransactionState>
      </UserState>
    </>

  );
}

export default App;