
function addTaskToTable() {
    const tableTaskSection = document.getElementById('tableTaskSection');
    const tableSubtaskSection = document.getElementById('tableSubtaskSection');
    Task.forEach(item => {
        const row1 = document.createElement('tr');
        row1.innerHTML = `
            <td>${item.task}</td>
            <td style="display: flex; justify-content: space-around;" > <i class="fa fa-pencil" aria-hidden="true"></i> <i class="fa fa-trash-o" aria-hidden="true"></i></td>
            `;
            item.subTask.forEach(thing => {
            const row2 = document.createElement('tr');
            row2.innerHTML = `
            <td>${thing.name}</td>
            <td>${thing.startDate}</td>
            <td>${thing.endDate}</td>
            <td>${thing.status}</td>
            <td style="display: flex; justify-content: space-around;" > <i class="fa fa-pencil" aria-hidden="true"></i> <i class="fa fa-trash-o" aria-hidden="true"></i>
            </td>
            `;
            tableSubtaskSection.appendChild(row2);
        })
        tableTaskSection.appendChild(row1);
        // console.log(item);
        
    });
    
}

// JavaScript
// function addTaskToTable() {
//     const tableTaskSection = document.getElementById('tableTaskSection');
//     const tableSubtaskSection = document.getElementById('tableSubtaskSection');

//     // Loop through tasks first and add rows to the tasks table
//     task.forEach(item => {
//       const taskRow = document.createElement('tr');
//       taskRow.innerHTML = `
//         <td>${item.task}</td>
//       `;
//       tableTaskSection.appendChild(taskRow);

//       // Loop through subtasks and add rows to the subtasks table for each task
//       item.subTask.forEach(subtask => {
//         const subtaskRow = document.createElement('tr');
//         subtaskRow.innerHTML = `
//           <td>${subtask.name}</td>
//           <td>${subtask.startDate}</td>
//           <td>${subtask.endDate}</td>
//           <td>${subtask.status}</td>
//         `;
//         tableSubtaskSection.appendChild(subtaskRow);
//       });
//     });
//   }

// Call the function to populate the tables
//   addTaskToTable();