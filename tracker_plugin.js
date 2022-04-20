fetch('data.json') // API som skickar nätverk requests
    .then(response => response.json()) // Returnerar data som JSON objekt
    .then(data => displayData(data)); 

function displayStudentResult(hiddenDiv) { // Togglar fram och tillbaka elevens information
    if(hiddenDiv.style.display === "none") 
        hiddenDiv.style.display = "block"; // Visar elevens info om det är osynligt från början
    else 
        hiddenDiv.style.display = "none";
}

function displayData(obj) {
    const container = document.getElementById('JSONValues'); // Variabel till JSONValues div:en
    var frag = document.createDocumentFragment(); // Dokument objekt som inte har en förälder

    for(var i = 0; i < obj.students.length; i++) { // Körs för varje elev
        var studentButton = document.createElement("button"); // Knapp element som användaren trycker på
        var studentInfo = document.createElement("div"); // Div element med info om eleven

        studentInfo.style.display = 'none'; // Är osynlig för användaren
        studentInfo.className = 'results'; // Tilldelas klassen 'results'
        studentButton.textContent = obj.students[i].name; // Knapptext visar elevens namn

        studentButton.addEventListener("click", displayStudentResult.bind(null, studentInfo)); // Anropar funktion vid knapptryck

        var avgGazeDir = document.createElement('p'); // Text för blickriktningsvärde
        var avgEyelid = document.createElement('p'); // Text för ögonlockvärde
        var timeDiagram = document.createElement('img'); // Bild av diagram

        timeDiagram.src = obj.students[i].timeGraph; // Får adress till varje elevs diagram
        timeDiagram.style.width = "600px";
        timeDiagram.style.height = "400px";
        avgGazeDir.className = "textValues"; // Tilldelas klassen 'textValues'
        avgEyelid.className = "textValues"; // Tilldelas klassen 'textValues'
        avgGazeDir.innerHTML = `Genomsnittlig tid med ouppmärksam blickriktning: ${obj.students[i].avgGazeDirection} sekunder`;
        avgEyelid.innerHTML = `Genomsnittlig tid med ögonlocken stängda: ${obj.students[i].avgEyelid} sekunder`;

        // Bifogar barn till dess föräldrar
        studentInfo.appendChild(avgGazeDir);  
        studentInfo.appendChild(avgEyelid);
        studentInfo.append(timeDiagram);
        frag.appendChild(studentButton); 
        frag.appendChild(studentInfo);   
    }
    container.appendChild(frag);
}