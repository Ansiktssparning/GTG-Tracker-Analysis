fetch('data.json')
    .then(response => response.json())
    .then(data => displayData(data));

function displayStudentResult(hiddenDiv) {
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
        studentInfo.className = 'results';
        studentButton.textContent = obj.students[i].name;
        studentButton.id = i;

        studentButton.addEventListener("click", displayStudentResult.bind(null, studentInfo));

        var avgGazeDir = document.createElement('p');
        var avgEyelid = document.createElement('p');
        var timeDiagram = document.createElement('img');

        timeDiagram.src = obj.students[i].timeGraph;
        timeDiagram.style.width = "600px";
        timeDiagram.style.height = "400px";
        avgGazeDir.className = "textValues";
        avgEyelid.className = "textValues";
        avgGazeDir.innerHTML = `Genomsnittlig tid med ouppmärksam blickriktning: ${obj.students[i].avgGazeDirection} sekunder`;
        avgEyelid.innerHTML = `Genomsnittlig tid med ögonlocken stängda: ${obj.students[i].avgEyelid} sekunder`;

        studentInfo.appendChild(avgGazeDir);
        studentInfo.appendChild(avgEyelid);
        studentInfo.append(timeDiagram);
        frag.appendChild(studentButton); 
        frag.appendChild(studentInfo);   
    }
    container.appendChild(frag);
}