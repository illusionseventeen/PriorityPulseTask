var myFuncCalls = 0;

function insertData() {
    myFuncCalls++;

    var table = document.getElementById("myTable");
    var row = document.createElement("tr");
    console.log(row);

    var cell0 = document.createElement("td");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");

    cell0.innerHTML = myFuncCalls;
    cell1.innerHTML = document.getElementById("patient-name").value;
    cell2.innerHTML = document.getElementById("patient-age").value;
    cell3.innerHTML = document.getElementById("case").value;
    cell4.innerHTML = document.getElementById("priority-level").value;
    cell5.innerHTML = document.getElementById("contact").value;

    row.appendChild(cell0);
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);


    table.children[0].appendChild(row);

};