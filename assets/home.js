// var choiceOne = document.getElementById("btnOne");
// var choiceTwo = document.getElementById("btnTwo");
// var choiceThree = document.getElementById("btnThree");

function Buttons(){
let contact = document.getElementById("contact").innerHTML;
let aboutMe = document.getElementById("aboutMe").innerHTML;
let art = document.getElementById("art").innerHTML;


contact.addEventListener("click", openLink);
aboutMe.addEventListener("click", openLink);
art.addEventListener("click", openLink);
}