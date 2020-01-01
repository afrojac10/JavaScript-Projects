

const   GETTEXT = document.querySelector("textarea");
const TEXTCONTAINER = document.querySelector(".newNotes");
const BUTTON = document.querySelector(".addNotes");
const   HEADER = document.querySelector(".addedText");
const   HEADERINPUT = document.querySelector("#header");

BUTTON.addEventListener("click" , checkEmptyField);
BUTTON.addEventListener("click" , grabHeader)
BUTTON.addEventListener("click" , grabText);
// BUTTON.addEventListener("click" , checkEmptyField);

// function joint(a){var b;return b=a[a.length-1],a.pop(),a=a.length>1?joint(a):a[0],function(){b.apply(new a)}}



function grabHeader(){
    var noteHeader = HEADERINPUT.value;
    if (noteHeader !== "" && noteHeader !== " " ){
        var containerOfHeader = document.createElement("h3");
        var headerText = document.createTextNode(noteHeader);
        containerOfHeader.appendChild(headerText);
        TEXTCONTAINER.appendChild(containerOfHeader);
        HEADERINPUT.value = null;

    }else{
        console.log("Please fill In!");
        HEADERINPUT.placeholder = "Fill In A Value";
        HEADERINPUT.classList.add('placeHolderColorChange');
    }
    
}



function grabText(){
    
    var noteInputs = GETTEXT.value;
    if (noteInputs !== "" && noteInputs !== " " ){
        var containerOfText = document.createElement("li");
        var textNotesInputs = document.createTextNode(noteInputs);
        containerOfText.appendChild(textNotesInputs);
        TEXTCONTAINER.appendChild(containerOfText);
        GETTEXT.value = null;
        
    }else{
        console.log("Please fill In!");
        GETTEXT.style.borderColor = "crimson";
        GETTEXT.placeholder = "Fill In A Value";
        // GETTEXT.classList.add('placeHolderColorChange');
    }

}

function checkEmptyField(){
    const noteHeader = HEADERINPUT.value;
    const noteInputs = GETTEXT.value;
    if (noteHeader === "" && noteHeader === " "  && noteInputs === "" && noteInputs === " " ){
        console.log("Hi");
    }else{
        console.log("J");
    }

}

checkEmptyField();
// grabText = joint([grabText, grabHeader]);

// console.log(BUTTON);





