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
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
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
            name="description"
            value={description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Responsible: </label>

          <input
            value={responsible}
            name="responsible"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Priority: </label>
          <input value={priority} name="priority" onChange={handleChange} />
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
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default CreateTodo;
