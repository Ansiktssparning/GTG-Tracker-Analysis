var students = [];

fetch('data.json')
    .then(response => response.json())
    .then(data => displayData(data));

function buttonClicked(student) {
    const targetDiv = document.getElementById("results");
    
    if(targetDiv.style.display === 'none') {
        targetDiv.style.display = 'block';
        targetDiv.innerHTML = student;
    } else 
        targetDiv.style.display = 'none';
} 

function displayData(obj) {
    const container = document.getElementById('JSONValues');
    for(var i = 0; i < obj.students.length; i++) {
        students[i] = document.createElement('button');
        students[i].insertAdjacentHTML("beforeend", obj.students[i].name);
        students[i].addEventListener("click", buttonClicked.bind(null, obj.students[i].name));
        container.appendChild(students[i]);
    }
}