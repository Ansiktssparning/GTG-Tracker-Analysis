fetch('data.json')
    .then(response => response.json())
    .then(data => displayData(data));

function btnFunc(hiddenDiv) {
    if(hiddenDiv.style.display === "none")
        hiddenDiv.style.display = "block";
    else
        hiddenDiv.style.display = "none";
}

function displayStudentResults(results, obj) {
    results.innerHTML = obj.students[0].name;
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

        studentButton.addEventListener("click", btnFunc.bind(null, studentInfo));
        displayStudentResults(studentInfo, obj);

        frag.appendChild(studentButton); 
        frag.appendChild(studentInfo);   
    }
    container.appendChild(frag);
}