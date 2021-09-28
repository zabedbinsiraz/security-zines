import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    
      <Router>
        <div>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
        </div>
      </Router>

    
  );
}

export default App;
