a react single page web application that consolidates aspects of a pomodoro timer, a to-do list, and a time tracker. The expected user flow is as follows: user starts by creating a task; user can then add microtasks to the parent task; when microtasks exist within a parent task, the user can interact with a timer to track time spent completing microtask; the total time expected and the total actual time spent on microtasks is aggregated and stored within the parent task; a bar graph is generated that shows the expected vs actual time spent per task.

- the default view is divided into three sections:
  - the relevant data models and types are as follows
    ```
    enum Status {
    	Done: 'done'
    	Active: 'active'
    }

    model Task {
    	id String // auto-generated uuid
    	name String
    	status Status
    	microBudget Int
    	timeSpent Int
    	timeBudget Int // default value of 0
    }

    model microTask {
    	id String // auto-generated uuid
    	name String
    	taskId String // auto-populated
    	status Status
    	timeBudget Int // default value is parent task's micro budget value
    	timeSpent Int  // default value of 0
    }
    ```
  - section one is vertically divided into two subsections
    - the subsection on the left has a form component for creating tasks and is followed by a list component that lists all tasks
      - note, this subsection is always present
      - the create task form has inputs for the task’s name and micro budget
      - each task item displays the task’s id, name, status, time budget and time spent
        - the time spent value is the sum of all its child microtasks’ time spent properties
        - the time budget value is the sum of all its child microtasks’ time budget properties
      - clicking on a task item will update the application’s state so that the task is marked as selected
        - additionally, selecting a new task item will reset the selected microtask state value to `null`
    - the subsection on the right has a form component for creating microtasks and is followed by a list component that lists all microtasks for the active parent task
      - note, this subsection’s content is only rendered when a task has been selected
      - the create microtask form has inputs for the microtask’s name and time budget
      - each microtask item displays the microtask’s name, parent task id, status, time budget and time spent
      - clicking on a microtask item will update the application’s state so that the microtask is marked as selected
  - section two contains the timer component
    - note, this subsection’s content is only rendered when a microtask has been selected
    - relevant internal state values are
    ```
    timeElapsed Int // in terms of seconds
    timeBudget Int // value received via props, in terms of minutes
    isActive Boolean // default value of false
    ```
    - the timer component renders the selected microtask’s name and the time elapsed working on the microtask in the format MM:SS
    - there are five buttons within the component
      - a stop button to stop the timer
        - update the microtask’s time spent property upon this action
      - a start button to start the timer
      - an extend button to double the microtask’s time budget value
      - a reset button to set the elapsed time back to 0
      - a complete button to change the microtask status to ‘done’
    - note, the timer component’s buttons are only enabled when the microtask status is ‘active’; if, status is ‘done’ then all buttons are disabled
    - when timer is active, its time elapsed state value is incremented by 1 every second
      - when the timer is not active, stop incrementing the time elapsed value
  - section three contains the bar graph component
    - the bar graph component displays the time budget vs time spent per task
