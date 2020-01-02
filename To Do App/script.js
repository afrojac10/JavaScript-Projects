

const   GETTEXT = document.querySelector("textarea");
const TEXTCONTAINER = document.querySelector(".newNotes");
const BUTTON = document.querySelector(".addNotes");
const   HEADER = document.querySelector(".addedText");
const   HEADERINPUT = document.querySelector("#header");

BUTTON.addEventListener("click" , () =>{
    checkEmptyField();
    
})


function grabHeader(){
    var noteHeader = HEADERINPUT.value;
        var containerOfHeader = document.createElement("h3");
        var headerText = document.createTextNode(noteHeader);
        containerOfHeader.appendChild(headerText);
        TEXTCONTAINER.appendChild(containerOfHeader);
        HEADERINPUT.value = null;

    // }else{
    //     console.log("Please fill In!");
    //     HEADERINPUT.placeholder = "Fill In A Value";
    //     HEADERINPUT.classList.add('placeHolderColorChange');
    // }
    
}

function grabText(){
    
    var noteInputs = GETTEXT.value;
        var containerOfText = document.createElement("li");
        var textNotesInputs = document.createTextNode(noteInputs);
        containerOfText.appendChild(textNotesInputs);
        TEXTCONTAINER.appendChild(containerOfText);
        GETTEXT.value = null;
        
    // }else{
    //     console.log("Please fill In!");
    //     GETTEXT.style.borderColor = "crimson";
    //     GETTEXT.placeholder = "Fill In A Value";
    //     GETTEXT.classList.add('placeHolderColorChange');
    // }

}

function checkEmptyField(){
    const noteHeader = HEADERINPUT.value;
    const noteInputs = GETTEXT.value;
    if (noteHeader !== "" && " "  && noteInputs !== "" &&  " " ){
        grabHeader();
        grabText();
        errMessageIfFieldEmpty();

    }else{
        console.log("Please fill In!");
        GETTEXT.style.borderColor = "crimson";
        GETTEXT.placeholder = "Fill In A Value";
        GETTEXT.classList.add('placeHolderColorChange');

        console.log("Please fill In!");
        HEADERINPUT.placeholder = "Fill In A Value";
        HEADERINPUT.classList.add('placeHolderColorChange');
        console.log("J");
    }

}


function errMessageIfFieldEmpty() {
    const noteHeader = HEADERINPUT.value;
    const noteInputs = GETTEXT.value;
    // Return Note and Header Field To Default Style
    if (noteHeader == "" && " "  && noteInputs == "" &&  " " ){
        GETTEXT.placeholder = "Enter Your Notes Here";
        //  Return Header Field Default Style
        HEADERINPUT.placeholder = "Enter Note Heading";
        HEADERINPUT.classList.add('inputPlaceHolderSettings');
        
        // Return Text Field Default Style
        GETTEXT.classList.add('inputPlaceHolderSettings');
        GETTEXT.style.borderColor = "grey";

    }else{
        console.log(null);
    }

}






