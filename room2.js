const bag1item = document.getElementById("bag1");
const bag2item = document.getElementById("bag2");
const keypaditem = document.getElementById("keypad");
const dooritem = document.getElementById("door");

//runs the function gameState as soon as the webpage is loaded
gameState();

//Checks the player's inventory and doesn't draw items that have already been picked up
function gameState() {
    if (sessionStorage.getItem("bag1item")) {
        bag1item.style.visibility = "hidden";
    }
    if (sessionStorage.getItem("bag2item")) {
        bag2item.style.visibility = "hidden";
    }
}

//Door code, only opens if both bags have been picked up and the keypad "puzzle" has been solved
dooritem.onclick = function() {
    if (sessionStorage.getItem("keypadunlocked") && (sessionStorage.getItem("bag1item")) && sessionStorage.getItem("bag2item")) {
        window.location = "end.html";
    }
    else {
        alert('You may not pass through my doorframe unless you have given me the bags of Goodie, and unlocked me by using the keypad (but you better touch it gently)')
    }
}

//Keypad code, 
keypaditem.onclick = function() {
    let randomnum = Math.floor(Math.random() * 10);
    if (sessionStorage.getItem("keypadunlocked")) {
        alert('I have already unlocked the keypad dumbhead')
    }
    else if (randomnum < 3) {
        alert('Wow nice, I accidentally pressed the right numbers and unlocked the door!')
        sessionStorage.setItem("keypadunlocked", true)
    }
    else {
        alert('Ehm that number was not right, maybe I should keep hitting the keypad.')
    }
}

//code for removing the bags the first time they are clicked
bag1item.onclick = function() {
    bag1item.style.visibility = "hidden";
    sessionStorage.setItem("bag1item", true);
}

bag2item.onclick = function() {
    bag2item.style.visibility = "hidden";
    sessionStorage.setItem("bag2item", true);
}