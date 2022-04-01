fetch('data.json')
    .then(response => response.json())
    .then(data => displayData(data));

function displayData(obj) {
    const container = document.querySelector("#JSONValues");
    for(var i = 0; i < obj.students.length; i++) {
        var studentNames = document.createElement('button');
        studentNames.innerHTML = obj.students[i].name;
        container.appendChild(studentNames);
    }
}