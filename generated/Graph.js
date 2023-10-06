import React from 'react';
import { Bar } from 'react-chartjs-2';

// Graph component to visualize the time budget vs time spent per task
const Graph = ({ tasks }) => {

  // Helper function to get all task names
  const getTaskNames = () => {
    return tasks.map(task => task.name);
  };

  // Helper function to get all time budgets
  const getTimeBudgets = () => {
    return tasks.map(task => task.timeBudget);
  };

  // Helper function to get all time spent
  const getTimeSpent = () => {
    return tasks.map(task => task.timeSpent);
  };

  // Data for the bar chart
  const data = {
    labels: getTaskNames(),
    datasets: [
      {
        label: 'Time Budget',
        data: getTimeBudgets(),
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
      {
        label: 'Time Spent',
        data: getTimeSpent(),
        backgroundColor: 'rgba(255,99,132,0.6)',
      },
    ],
  };

  return (
    <div id="graph">
      <Bar
        data={data}
        options={{
          title: {
            display: true,
            text: 'Expected vs Actual Time Spent per Task',
            fontSize: 25,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  );
};

export default Graph;
