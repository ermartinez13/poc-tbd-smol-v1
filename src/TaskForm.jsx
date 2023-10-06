import React, { useState } from "react";

// The TaskForm component is used to create tasks. It takes in a function prop 'createTask' to handle task creation
const TaskForm = ({ createTask }) => {
  // Define state variables for the task name and micro budget
  const [name, setName] = useState("");
  const [microBudget, setMicroBudget] = useState(0);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Call the createTask function prop
    createTask(name, Number(microBudget));

    // Reset form fields
    setName("");
    setMicroBudget(0);
  };

  return (
    <form id="taskForm" onSubmit={handleSubmit}>
      <label>
        Task Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Micro Budget:
        <input
          type="number"
          value={microBudget}
          onChange={(e) => setMicroBudget(e.target.value)}
          required
        />
      </label>

      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;
