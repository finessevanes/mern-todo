import React, { UseState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TodosList from "./components/TodosList";
import EditTodo from "./components/EditTodo";
import CreateTodo from "./components/CreateTodo";
import Logo from "./logo.png";

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* <a className="navbar-brand"> */}
          <img
            className="navbar-brand"
            src={Logo}
            width="30"
            height="30"
            alt="logo"
          />
          {/* </a> */}
          <Link to="/" className="navbar-brand">
            MERN_STACK Todo App
          </Link>
          <div className="collapase nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  Todos
                </Link>
              </li>
              <li>
                <Link to="/create" className="nav-link">
                  Create Todo
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
};

export default App;
