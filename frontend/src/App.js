import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/Navbar';
import Expense from './components/expenseTracker/Expense';
import Calendar from './components/classScheduler/Calendar';
import { useAlert } from 'react-alert'
import('./App.css')

function App() {

  const alert = useAlert()

  return (
    <>
      <Router>
        <button
          onClick={() => {
            alert.show('Oh look, an alert!', { type: 'success'})
          }}
        >
          Show Alert
        </button>
        <Navbar />

        <div className="container">
          <Switch>

            <Route exact path="/">
              <Expense />
            </Route>

            <Route exact path="/classScheduler">
              <Calendar />
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