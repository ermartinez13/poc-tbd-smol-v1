import React from 'react';

// TaskList component receives the list of tasks and a selectTask function as props
const TaskList = ({ tasks, selectTask }) => {
  return (
    <div id="taskList">
      {/* map over the tasks array and create a list item for each task */}
      {tasks.map((task) => (
        <div key={task.id} onClick={() => selectTask(task.id)}>
          <h3>{task.name}</h3>
          <p>Status: {task.status}</p>
          <p>Time Budget: {task.timeBudget} minutes</p>
          <p>Time Spent: {task.timeSpent} minutes</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
