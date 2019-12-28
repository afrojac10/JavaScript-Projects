const   GETTEXT = document.querySelector("textarea");
//const GETBUTTON = document.querySelector("button");

function grabText(){
    var me = GETTEXT.value;
    document.querySelector(".text").innerHTML = me;
    GETTEXT.value = null;
    // console.log(me);
}






