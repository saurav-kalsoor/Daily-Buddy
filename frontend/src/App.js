import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from './components/Login';
import Registration from './components/Registration';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>

            {/* <Route exact path="/">
            <Home />
          </Route> */}

            <Route exact path="/registration">
              <Registration />
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
