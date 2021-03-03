var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
var guestName = prompt("Please enter your name:");
if (guestList.includes(guestName) === true) {
    alert("Welcome to the party!");
} else {
    alert("Sorry, better luck next time!");
}