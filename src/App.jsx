import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import MicroTaskForm from "./MicroTaskForm";
import MicroTaskList from "./MicroTaskList";
import Timer from "./Timer";
import Graph from "./Graph";

function App() {
  // Define the state variables
  const [tasks, setTasks] = useState([]);
  const [microTasks, setMicroTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedMicroTask, setSelectedMicroTask] = useState(null);

  // Define the function to create a task
  const createTask = (name, microBudget) => {
    const newTask = {
      id: Date.now().toString(), // This is a simple way to generate unique IDs. In a real app, we would probably use a library like uuid.
      name,
      status: "active",
      microBudget,
      timeSpent: 0,
      timeBudget: 0,
    };
    setTasks([...tasks, newTask]);
  };

  // Define the function to select a task
  const selectTask = (id) => {
    setSelectedTask(tasks.find((task) => task.id === id));
    setSelectedMicroTask(null); // Reset the selected microtask when we select a new task
  };

  // Define the function to create a microtask
  const createMicroTask = (name, timeBudget) => {
    const newMicroTask = {
      id: Date.now().toString(),
      name,
      taskId: selectedTask.id,
      status: "active",
      timeBudget,
      timeSpent: 0,
    };
    setMicroTasks([...microTasks, newMicroTask]);
  };

  // Define the function to select a microtask
  const selectMicroTask = (id) => {
    setSelectedMicroTask(microTasks.find((microTask) => microTask.id === id));
  };

  // Define the function to update a microtask
  const updateMicroTask = (id, timeSpent, timeBudget) => {
    setMicroTasks(
      microTasks.map((microTask) =>
        microTask.id === id
          ? { ...microTask, timeSpent, timeBudget }
          : microTask
      )
    );
  };

  return (
    <div className="App">
      <div className="section-one">
        <TaskForm createTask={createTask} />
        <TaskList tasks={tasks} selectTask={selectTask} />
        {selectedTask && (
          <>
            <MicroTaskForm
              createMicroTask={createMicroTask}
              taskId={selectedTask.id}
            />
            <MicroTaskList
              microTasks={microTasks.filter(
                (microTask) => microTask.taskId === selectedTask.id
              )}
              selectMicroTask={selectMicroTask}
            />
          </>
        )}
      </div>
      {selectedMicroTask && (
        <Timer
          microTask={selectedMicroTask}
          updateMicroTask={updateMicroTask}
        />
      )}
      {/* <Graph tasks={tasks} /> */}
    </div>
  );
}

export default App;
