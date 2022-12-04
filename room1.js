const keyitem = document.getElementById("key");
const dooritem = document.getElementById("door");

//runs the function gameState
gameState();
//Checks the player's inventory, and doesn't draw the items that have already been picked up, if the page is reloaded.
function gameState() {
    if (sessionStorage.getItem("keyitem")) {
        keyitem.style.visibility = "hidden";
    }
}
//If key is clicked, the key will be hidden and added to storage.
keyitem.onclick = function() {
    keyitem.style.visibility = "hidden";
    sessionStorage.setItem("keyitem", true);
}

dooritem.onclick = function() {
    if (sessionStorage.getItem("keyitem")) {
        window.location = "room2.html";
    }
    else {
        alert('You need to find the key first! I am a talking door!');
    }
}