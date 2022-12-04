const replaybutton = document.getElementById("button");

replaybutton.onclick = function() {
    sessionStorage.clear();
    window.location = "index.html";
}