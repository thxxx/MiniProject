import './App.css';
import LandingPage from './components/Views/LandingPage/LandingPage'
import LoginPage from './components/Views/LoginPage/LoginPage'
import RegisterPage from './components/Views/RegisterPage/RegisterPage'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <><Router>
    <div>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </div>
  </Router>
    </>
  );
}

export default App;
