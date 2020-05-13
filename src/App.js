import React, { UseState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TodosList from "./components/TodosList";
import EditTodo from "./components/EditTodo";
import CreateTodo from "./components/CreateTodo";

const App = () => {
  return (
    <Router>
      <div className="container">
        <h1>MERN-Stack Todo App</h1>
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
};

export default App;
