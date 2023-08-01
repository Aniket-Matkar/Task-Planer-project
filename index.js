var Task = [
    {
        task: 'Homework',
        subTask: [
            {
                name: 'writeups',
                startDate: '2022-12-01',
                endDate: '2022-12-01',
                status: 'Completed'
            },
            {
                name: 'Study',
                startDate: '2022-12-01',
                endDate: '2022-12-01',
                status: 'Work In Progress'
            }
        ]
    }
    ,
    {
        task: 'workout',
        subTask: [
            {
                name: 'cardio',
                startDate: '2022-12-01',
                endDate: '2022-12-01',
                status: 'Cancelled'
            },
            {
                name: 'weight lifting',
                startDate: '2022-12-01',
                endDate: '2022-12-01',
                status: 'Due Passed'
            }
        ]
    }
]

function addTask() {
    const task = document.getElementById('task').value;
    const newTask = {
        task: task
    }
    const isTaskPresent = Task.some(i => i.task.toUpperCase() == task.toUpperCase());
    if (isTaskPresent == false) {
        console.log('adding new task');
        Task.push(newTask);
    } else {
        console.log('task already present');
        return;
    }

}
function addSubTask(TaskIdx) {
    const subTask = document.getElementById('subtask').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const status = document.getElementById('status').value;

    let error = validate()

    if (error = true) {
        error.innerHTML = "";

        const newsubTask = {
            name: subTask,
            startDate: startDate,
            endDate: endDate,
            status: status
        }
        const isSubTaskPresent = Task[TaskIdx].subTask.some(i => i.name == subTask);
        const Index = Task.findIndex(i => i.task == task);
        if (isSubTaskPresent == false) {
            console.log('adding new task');
            Task[TaskIdx].push(newsubTask);
        } else {
            alert("Subtask with this name already exist")
        }

    }
}
// function to add employee entry to the table from the FORM
// function addWholeTask() {
//     const task = document.getElementById('task').value;
//     const subTask = document.getElementById('subtask').value;
//     const startDate = document.getElementById('startDate').value;
//     const endDate = document.getElementById('endDate').value;
//     const status = document.getElementById('status').value;

//     let error = validate();

//     if (error = true) {
//         error.innerHTML = "";
//         const newTask = {
//             task: task,
//             subTask: [
//                 {
//                     name: subTask,
//                     startDate: startDate,
//                     endDate: endDate,
//                     status: status
//                 }
//             ]
//         };
//         const newsubTask = {
//             name: subTask,
//             startDate: startDate,
//             endDate: endDate,
//             status: status
//         }

//         const isTaskPresent = Task.some(i => i.task == task);
//         const Index = Task.findIndex(i => i.task == task);
//         if (isTaskPresent == false) {
//             console.log('adding new task');
//             Task.push(newTask);
//         } else {
//             console.log('adding new subtask');
//             Task[Index].subTask.push(newsubTask);
//         }
//         addTaskToTable();
//     }else{
//         console.log('failed to push data to array');
//     }
// }

function resentForm() {
    document.getElementById("form").reset();
}

function addTaskToTable() {
    // const tableTaskSection = document.getElementById('tableTaskSection');
    // const tableSubtaskSection = document.getElementById('tableSubtaskSection');
    const tableBody = document.getElementById('tableBody');
    // -----------------
    const taskInput = document.getElementById('task');
    taskInput.readOnly = false;
    const addBtn = document.getElementById('add');
    addBtn.innerHTML = "Add";
    addBtn.style.background = 'green';
    addBtn.style.color = 'white';
    //------------------
    // tableTaskSection.innerHTML = '';
    // tableSubtaskSection.innerHTML = '';
    tableBody.innerHTML = '';
    Task.forEach(item => {
        let row = document.createElement('tr');
        const row1 = document.createElement('tr');
        const row2 = document.createElement('tr');
        const taskIndex = Task.findIndex(i => i.task === item.task);
        console.log(Task.length, 'asdfasdf');
        if (Task.length < 3) {
            row1.innerHTML = `
            <th colspan="4">Task</th>
            <th>Action</th>
            `;
            tableBody.appendChild(row1);

            row2.innerHTML = `
                 <th>Sub Task</th>
                 <th>Start Date</th>
                 <th>End Date</th>
                 <th>Status</th>
                 <th>Action</th>
                 `;
            tableBody.appendChild(row2);
        }
        row.innerHTML = `
            <td colspan="4">${item.task}</td>
            <td colspan="" style="display: flex; justify-content: space-around;" > 
            <i class="fa fa-pencil" aria-hidden="true" onclick="editTask(${taskIndex})" ></i> 
            <i class="fa fa-trash-o" aria-hidden="true" onclick="deleteTask(${taskIndex})" ></i></td>
            `;
        console.log('2');
        tableBody.appendChild(row);
        item.subTask.forEach(thing => {
            // const row2 = document.createElement('tr');
            const row3 = document.createElement('tr');
            if (thing.status == 'Completed') {
                row3.style.textDecoration = "line-through";
            }
            if (thing.status == 'Due Passed') {
                row3.style.background = "red";
            }
            // let temp = 0;
            // if (temp === 0) {
            //     row2.innerHTML = `
            //     <th>Sub Task</th>
            //     <th>Start Date</th>
            //     <th>End Date</th>
            //     <th>Status</th>
            //     <th>Action</th>
            //     `;
            //     console.log('2f');
            //     tableBody.appendChild(row2);
            //     temp++;
            // }
            row3.innerHTML = `
            <td>${thing.name}</td>
            <td>${thing.startDate}</td>
            <td>${thing.endDate}</td>
            <td>${thing.status}</td>
            <td style="display: flex; justify-content: space-around;" > 
            <i class="fa fa-pencil" aria-hidden="true" onclick="editSubTask(${taskIndex},'${thing.name}')" ></i> 
            <i class="fa fa-trash-o" aria-hidden="true" onclick="deleteSubTask(${taskIndex},'${thing.name}')" ></i>
            </td>
            `;
            tableBody.appendChild(row3);
            // tableSubtaskSection.appendChild(row2);
        })
        // tableTaskSection.appendChild(row1);
        // console.log(item);

    });

}

function validate() {
    // const task = document.getElementById('task').value;
    const subtask = document.getElementById('subtask').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const status = document.getElementById('status').value;

    const error = document.getElementById("error");
    const InputRegex = /^[A-Za-z\s]+$/;

    if (subtask == false || startDate == false || endDate == false || status == false) {
        error.innerHTML = "Please fill in all fields.";
        return false;
    }
    // else if (InputRegex.test(task) == false) {
    //     error.innerHTML = "Only alphabets are allowed in name";
    //     return false;
    // } 
    else {
        return true;
    }
}