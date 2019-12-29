

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

    // console.log(containerOfText);
    }else{
        console.log("Please fill In!");
    }
    
    
}
// console.log(BUTTON);





