

const   GETTEXT = document.querySelector("textarea");
const TEXTCONTAINER = document.querySelector(".newNotes");
const BUTTON = document.querySelector(".addNotes");
const   HEADERINPUT = document.querySelector("#header");

BUTTON.addEventListener("click" , () =>{
    checkEmptyField(); 
    
})


function grabHeader(){
    // Get Title From Field Create New Element And Append To DOM
    let noteHeader = HEADERINPUT.value;
    let containerOfHeader = document.createElement("h3");
    let headerText = document.createTextNode(noteHeader);
    containerOfHeader.appendChild(headerText);
    TEXTCONTAINER.appendChild(containerOfHeader);
    HEADERINPUT.value = null;
    
}

function grabText(){
    // Get Notes From Field Create New Element And Append To DOM
    let noteInputs = GETTEXT.value;
    let containerOfText = document.createElement("li");
    let textNotesInputs = document.createTextNode(noteInputs);
    containerOfText.appendChild(textNotesInputs);
    TEXTCONTAINER.appendChild(containerOfText);
    GETTEXT.value = null;

}
'use strict'
function checkEmptyField(){
    // Check If Field Is Empty Or Contain Space
    const noteHeader = HEADERINPUT.value;
    const noteInputs = GETTEXT.value;

    if (noteHeader !== ""   && noteInputs !== "" ){
        checkSpace()
    }
    
    else{
        errMessageIfFieldEmpty();
    }

}

var checkSpace = function() {
    var noteHeader = HEADERINPUT.value;
    var noteInputs = GETTEXT.value; 
    
    if (noteHeader.trim() !== "" && noteInputs.trim() !== "" ){
        grabHeader();
        grabText();
        styleRestoreDefault();
    }else{
        console.log("Not working");
        errMessageIfFieldEmpty();

        HEADERINPUT.value = "";
        GETTEXT.value = ""; 
    }
} 


function styleRestoreDefault() {
    const noteHeader = HEADERINPUT.value;
    const noteInputs = GETTEXT.value;
    // Return Note and Title Field To Default Style
    if (noteHeader == ""  && noteInputs == "" ){
        GETTEXT.placeholder = "Enter Your Notes Here";
        //  Return Title Field Default Style
        HEADERINPUT.placeholder = "Enter Note Heading";
        HEADERINPUT.classList.add('inputPlaceHolderSettings');
        
        // Return Text Field Default Style
        GETTEXT.classList.add('inputPlaceHolderSettings');
        GETTEXT.style.borderColor = "grey";

    }else{
        console.log(null);
    }

}

function errMessageIfFieldEmpty(){
    // Error message and warning when field empty
    console.log("Please fill In!");
    // Title Error Message
    HEADERINPUT.placeholder = "Fill In A Value";
    HEADERINPUT.classList.add('placeHolderColorChange');
    //  Notes Error Message
    GETTEXT.style.borderColor = "crimson";
    GETTEXT.placeholder = "Fill In A Value";
    GETTEXT.classList.add('placeHolderColorChange');

}






