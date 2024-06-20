let openMenu = document.querySelector(".fa-bars");
let closeMenu = document.querySelector(".fa-times");
let navLinks = document.querySelector("#header nav ul");

openMenu.onclick = function() {
    navLinks.style.right = "0";
}
closeMenu.onclick = function () {
    navLinks.style.right = "-200px";
}