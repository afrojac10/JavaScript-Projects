

const   GETTEXT = document.querySelector("textarea");
const TEXTCONTAINER = document.querySelector(".newNotes");
const BUTTON = document.querySelector(".addNotes");
BUTTON.addEventListener("click" , grabText);

function grabText(){
    
    var noteInputs = GETTEXT.value;
    if (noteInputs !== "" && noteInputs !== " " ){
        var containerOfText = document.createElement("li");
        var textNotesInputs = document.createTextNode(noteInputs);
        containerOfText.appendChild(textNotesInputs);
        TEXTCONTAINER.appendChild(containerOfText);
        GETTEXT.value = null;

    if (noteInputs == "" && noteInputs == " "){
        GETTEXT.style.outlineColor = "red";
    }

    // console.log(containerOfText);
    }else{
        console.log("Please fill In!");
        GETTEXT.style.borderColor = "crimson";
        GETTEXT.placeholder = "Fill In A Value";
    }
    
    
}
// console.log(BUTTON);





