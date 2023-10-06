import React, { useState } from 'react';
import PropTypes from 'prop-types';

// MicroTaskForm component for creating microtasks
const MicroTaskForm = ({ createMicroTask, taskId }) => {
  // React useState hook for form fields
  const [name, setName] = useState('');
  const [timeBudget, setTimeBudget] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Invoke the createMicroTask function with the form data
    createMicroTask({
      name,
      timeBudget,
      taskId,
    });

    // Clear the form fields
    setName('');
    setTimeBudget('');
  };

  // Render the form
  return (
    <form id="microTaskForm" onSubmit={handleSubmit}>
      <label htmlFor="microTaskName">MicroTask Name:</label>
      <input
        id="microTaskName"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="microTaskTimeBudget">Time Budget:</label>
      <input
        id="microTaskTimeBudget"
        type="number"
        value={timeBudget}
        onChange={(e) => setTimeBudget(e.target.value)}
        required
      />

      <button type="submit">Create MicroTask</button>
    </form>
  );
};

// Prop types for the component
MicroTaskForm.propTypes = {
  createMicroTask: PropTypes.func.isRequired,
  taskId: PropTypes.string.isRequired,
};

export default MicroTaskForm;
