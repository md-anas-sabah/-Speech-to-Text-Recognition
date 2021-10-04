const btn = document.getElementById("btn");
const result = document.getElementById("result");
const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();
recognition.onstart = function(){
    console.log("You Can Speak Now");
}
recognition.onresult = function(event){
    var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById("result").innerHTML = text;
}
function copyDivToClipboard(){
    var range = document.createRange();
    range.selectNode(document.getElementById("result"));
    window.getSelection().removeAllRanges(); //Clear current Selection
    window.getSelection().addRange(range); //to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // to deselect
    alert("Copied The Text");
}