var Task = [
    {
        task: 'Homework',
        subTask: [
            {
                name: 'writeups',
                startDate: '12/12/2022',
                endDate: '13/12/2022',
                status: 'complited'
            },
            {
                name: 'Study',
                startDate: '12/12/2022',
                endDate: '13/12/2022',
                status: 'complited'
            }
        ]
    },
    {
        task: 'workout',
        subTask: [
            {
                name: 'cardio',
                startDate: '12/12/2022',
                endDate: '13/12/2022',
                status: 'complited'
            },
            {
                name: 'weight lifting',
                startDate: '12/12/2022',
                endDate: '13/12/2022',
                status: 'complited'
            }
        ]
    }
]

// function to add employee entry to the table from the FORM
function addWholeTask() {
    console.log('sdf');
    const task = document.getElementById('task').value;
    const subTask = document.getElementById('subtask').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const status = document.getElementById('status').value;
    const newTask = {
        task: task,
        subTask: [
            {
                name: subTask,
                startDate: startDate,
                endDate: endDate,
                status: status
            }
        ]
    };
    console.log(Task);
    Task.push(newTask); 
    console.log(Task);
    addTaskToTable();
}

function resentForm() {
    document.getElementById("employeeForm").reset();
}