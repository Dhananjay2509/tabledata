// const obj={
//     name:"Dhananjay",
//     age: 21,
//     occupation: "Developer"
// };

// console.log(obj);


// function showDataTable(obj){
//   const table = document.getElementById('container');
//   table.innerHTML="";

//   for (const key in obj){
//      for( )
//     const row= table.insertRow(0);
//     const KeyCell= row.insertCell();
//     const valueCell= row.insertCell();

//     KeyCell.textContent= key;
//     valueCell.textContent= obj[key];

//     const input = document.createElement('input');
//     input.type='text';
    
//     input.row=key;
//     input.KeyCell= obj[key];

//     valueCell.appendChild(input);

//   }

// }

// showDataTable(obj)

let obj = {
    name: "Dhananjay Balang",
    age: 21,
    occupation: "Developer"
};

function displayObjectValues() {
    document.getElementById("nameCell").textContent = obj.name;
    document.getElementById("ageCell").textContent = obj.age;
    document.getElementById("occupationCell").textContent = obj.occupation;
}

function saveChanges() {
    obj.name = document.getElementById("nameCell").textContent;
    obj.age = parseInt(document.getElementById("ageCell").textContent);
    obj.occupation = document.getElementById("occupationCell").textContent;
    displayObjectValues(); 
}

displayObjectValues();