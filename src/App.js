import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import React,{createContext, useState} from 'react';
import Login from './Components/Login/Login';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
   <UserContext.Provider> value={[loggedInUser,setLoggedInUser]}
      <Router>
      <div>

      

        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/login">
           <Login />

          </Route>
        </Switch>
      </div>
    </Router>
   </UserContext.Provider>
  );
}

export default App;
