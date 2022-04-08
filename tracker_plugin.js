fetch('data.json')
    .then(response => response.json())
    .then(data => displayData(data));

function btnFunc(student_name, hiddenDiv) {
    if(hiddenDiv.style.display === "none")
        hiddenDiv.style.display = "block";
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
        studentInfo.innerHTML = "Halloj :)";

        studentButton.textContent = obj.students[i].name;
        studentButton.addEventListener("click", btnFunc.bind(null, obj.students[i].name, studentInfo));
        frag.appendChild(studentButton); 
        frag.appendChild(studentInfo);   
    }
    container.appendChild(frag);
}