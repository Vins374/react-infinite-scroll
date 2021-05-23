import React from "react";
import { Route,  BrowserRouter as Router } from 'react-router-dom'
import Home from "./screens/home/home.component";
import Login from "./screens/login/login.component";

function App() {

  return (
    <>
    <Router>
         <Route exact path="/" component={Login} />
         <Route path="/home" component={Home} />
   </Router>
    </>
  );
}

export default App;
