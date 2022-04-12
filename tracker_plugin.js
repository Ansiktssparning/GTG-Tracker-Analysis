fetch('data.json')
    .then(response => response.json())
    .then(data => displayData(data));

function displayStudentResult(hiddenDiv, obj, sID) {
    if(hiddenDiv.style.display === "none") {
        hiddenDiv.style.display = "block";
        hiddenDiv.innerHTML = obj.students[sID].name;
    }
    else
        hiddenDiv.style.display = "none";
}

function displayData(obj) {
    const container = document.getElementById('JSONValues');
    var frag = document.createDocumentFragment();

    for(var i = 0; i < obj.students.length; i++) {
        var studentButton = document.createElement("button");
        var studentInfo = document.createElement("div");

        studentInfo.style.display = 'none';
        studentInfo.className = 'results';
        studentButton.textContent = obj.students[i].name;
        studentButton.id = i;

        studentButton.addEventListener("click", displayStudentResult.bind(null, studentInfo, obj, studentButton.id));

        frag.appendChild(studentButton); 
        frag.appendChild(studentInfo);   
    }
    container.appendChild(frag);
}