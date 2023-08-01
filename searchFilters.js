function searchTask() {
    let input = document.getElementById("search1");
    let inputData = input.value.toUpperCase();
    let Table = document.getElementById("table");
    let tr = Table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0];
        if (td !== false) {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(inputData) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


// function searchSubtasks() {
//     let input = document.getElementById("search2");
//     let inputData = input.value.toUpperCase();
//     let taskTable = document.getElementById("table");
//     let tr = taskTable.getElementsByTagName("tr");

//     for (i = 0; i < tr.length; i++) {
//         // td = tr[i].getElementsByTagName("td")[0];
//         let td3 = tr[i].getElementsByTagName("td")[3];
//         let td2 = tr[i].getElementsByTagName("td")[2];
//         if (td3 !== false || td2 !== fa) {
//             // let txtValue = td.textContent || td.innerText;
//             let txtValue3 = td3.textContent || td3.innerText;
//             let txtValue2 = td2.textContent || td2.innerText;
//             if (txtValue3.toUpperCase().indexOf(inputData) > -1 || txtValue2.toUpperCase().indexOf(inputData) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }
