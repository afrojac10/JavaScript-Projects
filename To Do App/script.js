

const   GETTEXT = document.querySelector("textarea");
const TEXTCONTAINER = document.querySelector(".newNotes");
const BUTTON = document.querySelector(".addNotes");
const   HEADER = document.querySelector(".addedText");
const   HEADERINPUT = document.querySelector("#header");

BUTTON.addEventListener("click" , grabText);
BUTTON.addEventListener("click" , grabHeader);

// function joint(a){var b;return b=a[a.length-1],a.pop(),a=a.length>1?joint(a):a[0],function(){b.apply(new a)}}

function grabText(){
    
    var noteInputs = GETTEXT.value;
    if (noteInputs !== "" && noteInputs !== " " ){
        var containerOfText = document.createElement("li");
        var textNotesInputs = document.createTextNode(noteInputs);
        containerOfText.appendChild(textNotesInputs);
        TEXTCONTAINER.appendChild(containerOfText);
        GETTEXT.value = null;

    console.log(containerOfText);
    }else{
        console.log("Please fill In!");
        GETTEXT.style.borderColor = "crimson";
        GETTEXT.placeholder = "Fill In A Value";
        // GETTEXT.classList.add('placeHolderColorChange');
    }


   var noteHeader = HEADERINPUT.value;
    if (noteHeader !== "" && noteHeader !== " " ){
        var containerOfHeader = document.createElement("h3");
        var headerText = document.createTextNode(noteHeader);
        containerOfHeader.appendChild(headerText);
        HEADER.appendChild(containerOfHeader);
        HEADERINPUT.value = null;

    
    console.log(HEADER);
    }else{
        console.log("Please fill In!");
        HEADERINPUT.placeholder = "Fill In A Value";
        HEADERINPUT.classList.add('placeHolderColorChange');
    }

}



// function grabHeader(){
    // var noteHeader = HEADERINPUT.value;
    // if (noteHeader !== "" && noteHeader !== " " ){
    //     var containerOfHeader = document.createElement("h3");
    //     var headerText = document.createTextNode(noteHeader);
    //     containerOfHeader.appendChild(headerText);
    //     HEADER.appendChild(containerOfHeader);
    //     HEADERINPUT.value = null;

    
    // console.log(HEADER);
    // }else{
    //     console.log("Please fill In!");
    //     HEADERINPUT.placeholder = "Fill In A Value";
    //     HEADERINPUT.classList.add('placeHolderColorChange');
    // }
    
}

// grabText = joint([grabText, grabHeader]);

// console.log(BUTTON);





