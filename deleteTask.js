function deleteSubTask(taskIndex, subtaskName) {
    // const button = document.getElementById('clearButton');
    // button.style.display = "none";
    const subTaskIndex = Task[taskIndex].subTask.findIndex(item => item.name == subtaskName);
    if (subTaskIndex !== -1) {
        Task[taskIndex].subTask.splice(subTaskIndex, 1);
        addTaskToTable();
    }else{
        console.log('subtask not found in array');
    }
}

function deleteTask(taskIndex){
    console.log(Task[taskIndex]);
    if(taskIndex !== -1){
        Task.splice(taskIndex, 1);
        addTaskToTable();
    }else{
        console.log('task not found in array');
    }
}