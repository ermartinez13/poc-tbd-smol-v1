import React from 'react';

const MicroTaskList = ({ microTasks, selectMicroTask }) => {
  // This function handles the selection of a microtask in the list.
  const onSelectMicroTask = (microTaskId) => {
    selectMicroTask(microTaskId);
  };

  return (
    <div id="microTaskList">
      {microTasks.map(microTask => (
        <div key={microTask.id} onClick={() => onSelectMicroTask(microTask.id)}>
          <p>Name: {microTask.name}</p>
          <p>Parent Task ID: {microTask.taskId}</p>
          <p>Status: {microTask.status}</p>
          <p>Time Budget: {microTask.timeBudget}</p>
          <p>Time Spent: {microTask.timeSpent}</p>
        </div>
      ))}
    </div>
  );
};

export default MicroTaskList;
