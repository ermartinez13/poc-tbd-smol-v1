# Plan

## Files

1. `App.js`: This is our main application file. This will include the state for the selected task and microtask, and functions to create tasks and microtasks.

2. `TaskForm.js`: This is the form that is used to create tasks. It will export a function `TaskForm` that takes a function `createTask` as a prop.

3. `TaskList.js`: This is the list of tasks. It will export a function `TaskList` that takes a list of tasks and a function `selectTask` as props.

4. `MicroTaskForm.js`: This is the form that is used to create microtasks. It will export a function `MicroTaskForm` that takes a function `createMicroTask` and a taskID as props.

5. `MicroTaskList.js`: This is the list of microtasks for the selected task. It will export a function `MicroTaskList` that takes a list of microtasks and a function `selectMicroTask` as props.

6. `Timer.js`: This is the timer for the selected microtask. It will export a function `Timer` that takes a microtask and a function `updateMicroTask` as props.

7. `Graph.js`: This is the bar graph showing the expected vs actual time spent per task. It will export a function `Graph` that takes a list of tasks as props.

## Variables

1. `tasks`: This is the list of tasks. It is an array of objects, where each object has the properties `id`, `name`, `status`, `microBudget`, `timeSpent` and `timeBudget`.

2. `microTasks`: This is the list of microtasks. It is an array of objects, where each object has the properties `id`, `name`, `taskId`, `status`, `timeBudget` and `timeSpent`.

3. `selectedTask`: This is the currently selected task. It is an object with the same properties as the objects in `tasks`.

4. `selectedMicroTask`: This is the currently selected microtask. It is an object with the same properties as the objects in `microTasks`.

## ID Names

1. `taskForm`: This is the form for creating tasks.

2. `taskList`: This is the list of tasks.

3. `microTaskForm`: This is the form for creating microtasks.

4. `microTaskList`: This is the list of microtasks for the selected task.

5. `timer`: This is the timer for the selected microtask.

6. `graph`: This is the bar graph showing the expected vs actual time spent per task.

## Message Names

1. `createTask`: This function is called when the user submits the `taskForm`. It creates a new task and adds it to `tasks`.

2. `selectTask`: This function is called when the user clicks on a task in `taskList`. It sets `selectedTask` to the clicked task.

3. `createMicroTask`: This function is called when the user submits the `microTaskForm`. It creates a new microtask and adds it to `microTasks`.

4. `selectMicroTask`: This function is called when the user clicks on a microtask in `microTaskList`. It sets `selectedMicroTask` to the clicked microtask.

5. `updateMicroTask`: This function is called when the timer is stopped or extended. It updates the `timeSpent` and `timeBudget` properties of the selected microtask.

## Function Names

1. `createTask`: This function creates a new task.

2. `selectTask`: This function sets the selected task.

3. `createMicroTask`: This function creates a new microtask.

4. `selectMicroTask`: This function sets the selected microtask.

5. `updateMicroTask`: This function updates the selected microtask.

6. `calculateTimeSpent`: This function calculates the total time spent on all tasks.

7. `calculateTimeBudget`: This function calculates the total time budget for all tasks.

8. `renderGraph`: This function renders the bar graph.