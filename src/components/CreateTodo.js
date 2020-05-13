import React, { UseState, useState, useEffect } from "react";

function createNewTodo() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}
const initialState = {
  description: "",
  responsible: "",
  priority: "",
  isCompleted: false,
};

const CreateTodo = () => {
  const [
    { description, responsible, priority, isCompleted },
    setState,
  ] = useState(initialState);

  const clearState = () => {
    setState({ ...initialState });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? setState((prevState) => ({ ...prevState, [name]: checked }))
      : setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTodo().then(clearState);
    console.log(`Description: ${description}`);
    console.log(`responsible: ${responsible}`);
    console.log(`priority: ${priority}`);
    console.log(`isCompleted: ${isCompleted}`);
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Create New Todo</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Responsible: </label>
          <input
            className="form-control"
            value={responsible}
            name="responsible"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="priority"
                id="priorityLow"
                value="Low"
                checked={priority === "Low"}
                onChange={handleChange}
              />
              Low
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="priority"
                id="priorityMedium"
                value="Medium"
                checked={priority === "Medium"}
                onChange={handleChange}
              />
              Medium
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="priority"
                id="priorityHigh"
                value="High"
                checked={priority === "High"}
                onChange={handleChange}
              />
              High
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Completed: </label>
          <input
            checked={isCompleted}
            name="isCompleted"
            type="checkbox"
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Save" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default CreateTodo;
