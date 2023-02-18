let shoppingCard = document.querySelector(".shoppingCard");
let signinBx = document.querySelector(".signinBx");
let signupBx = document.querySelector(".signupBx");
let section = document.querySelector("section");
let container = document.querySelector(".container");
let form1 = document.forms[0];
let form2 = document.forms[1];
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
let shipmentData = document.querySelector(".shipmentData");
let listOfProducts = document.querySelector(".listOfProducts");
let orderDetail = document.querySelector(".orderDetail");
let total = document.querySelector(".total");
let orderTotal = document.querySelector(".orderTotal");
let hiddenList = [];
let totalSumm = 0;

let makeOrder = document.querySelector(".makeOrder").addEventListener("click", function (e) {
    section.classList.toggle("starter")
    shoppingCard.style.zIndex = "0";
    signupBx.style.zIndex = "10";
    signinBx.style.zIndex = "10";
})

let submit = document.querySelector(".submit").addEventListener("click", function (e) {
    shoppingCard.style.zIndex = "0";
    signupBx.style.zIndex = "10";
    signinBx.style.zIndex = "10";
})

let login = document.querySelector(".login").addEventListener("click", function (e) {
    shoppingCard.style.zIndex = "0";
})

let back = document.querySelector(".back").addEventListener("click", function (e) {
    alert("Not Today");
})

function toggleForm() {
    container.classList.toggle("active")
    section.classList.toggle("active")
}
