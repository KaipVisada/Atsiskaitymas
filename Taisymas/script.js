"use strict"
// burger
var anchors = document.getElementsByClassName("link")
var burger = document.getElementById("burger");

//  burger likutis
burger.addEventListener("click", function () {
    for (var x of anchors) {
        x.classList.toggle("block");
        x.classList.remove("selected");

    }
    this.classList.toggle("rotate");

});
var links = document.getElementsByTagName("a");

// toggles links style
for (var x of links) {
    x.addEventListener("click", function () {

        for (var x of links) {
            x.classList.remove("selected");
        }

        this.classList.add("selected");
    })
}

// mainpage inputs
var name1 = document.getElementById("name1");
var surname1 = document.getElementById("lname1");
var number1 = document.getElementById("number1");
var type1 = document.getElementById("type1");
var type2 = document.getElementById("type2");
var getStarted = document.getElementById("getstarted");

getStarted.addEventListener("click", function () {
    if (!name1.value || !surname1.value || number1.value <= 0) {
        alert("Teks Pildyti");
    } else {
        alert("Sudie Privatumui :D");
        name1.value = '';
        surname1.value = '';
        number1.value = '';
    }
});

// contacts inputs
var name2 = document.getElementById("name2");
var surname2 = document.getElementById("lname2");
var number2 = document.getElementById("number2");
var type3 = document.getElementById("type3");
var type4 = document.getElementById("type4");
var contButton = document.getElementById("cont-button");

contButton.addEventListener("click", function () {
    if (!name2.value || !surname2.value || number2.value <= 0) {
        alert("Tu gal berastis?");
    } else {
        alert("Ate privatumui");
        name2.value = '';
        surname2.value = '';
        number2.value = '';
    }
});

// toggles links style
for (var x of anchors) {
    x.addEventListener("click", function () {
        for (var x of anchors) {
            x.classList.remove("selected");
            x.classList.remove("block");
        }
        this.classList.add("selected");
        burger.classList.remove("rotate");

        this.classList.add("block");

    })
}

// keiciant dydi
window.addEventListener("resize", function () {
    for (var x of anchors) {
        x.classList.remove("block");
        x.classList.remove("selected");
    }
    burger.classList.remove("rotate");
})
