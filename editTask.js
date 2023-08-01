let TaskIndex = 0;
function editSubTask(taskIndex, subtaskName) {
    const taskInput = document.getElementById('task');
    taskInput.readOnly = true;
    const addBtn = document.getElementById('add');
    addBtn.innerHTML = "Edit";
    addBtn.style.background = 'orange';
    // const button = document.getElementById('clearButton');
    // button.style.display = "none";
    const subTaskIndex = Task[taskIndex].subTask.findIndex(item => item.name == subtaskName);
    if (subTaskIndex !== -1) {
        const task = Task[taskIndex];
        const subtask = task.subTask[subTaskIndex];

        document.getElementById("task").value = task.task;
        document.getElementById("subtask").value = subtask.name;
        document.getElementById("startDate").value = subtask.startDate;
        document.getElementById("endDate").value = subtask.endDate;
        console.log(typeof(subtask.status),subtask.status);

        document.getElementById("completedOption").selected = (subtask.status == 'Completed');
        document.getElementById("workInProgressOption").selected = (subtask.status === 'Work In Progress');
        document.getElementById("cancelledOption").selected = (subtask.status === 'Cancelled');
        document.getElementById("duePassedOption").selected = (subtask.status === 'Due Passed');

        // Task.splice(taskIndex, 1);
        Task[taskIndex].subTask.splice(subTaskIndex, 1);

    }
}

function editTask(taskIndex) {
    document.getElementById('add').style.display = 'none';
    document.getElementById('form').style.display = 'none';
    document.getElementById('editTask').style.transform = 'scale(1)';
    document.querySelector('#editTask button').style.transform = 'scale(1)';
    
    if (taskIndex !== -1) {
        const task = Task[taskIndex];
        document.getElementById("task1").value = task.task;
        TaskIndex = taskIndex;
    }
}
function saveEditedTask(){
    const task = document.getElementById('task1').value
    let error = document.getElementById('error2');
    if(task == ''){
        error.innerHTML = "Task can't be empty";
        return;
    }
    // Task.splice(TaskIndex, 1, task);
    Task[TaskIndex].task = task;
    console.log(Task[TaskIndex]);


    document.getElementById('add').style.display = 'block';
    document.getElementById('form').style.display = 'flex';
    document.getElementById('editTask').style.transform = 'scale(0.1)';
    document.querySelector('#editTask button').style.transform = 'scale(0.1)';
    addTaskToTable();
}

// function taskEditMode(){
//     document.getElementById('subtask').style.display = 'none';
//     document.getElementById('startDate').style.display = 'none';
//     document.getElementById('endDate').style.display = 'none';
//     document.getElementById('status').style.display = 'none';

// }