"use strict";

var buttons = document.getElementsByTagName("button");

for (var x of buttons){
    x.addEventListener("click", function(){
        for (var y of buttons){
            y.classList.remove("active");
        }

        this.classList.add("active");
        var index = this.getAttribute("index");
        swiper.slideTo(index, 1000);
    })
}


swiper.on("slideChange", function(){
    var activeButton = button[swiper.activeIndex];
    for(var x of buttons){
        x.classList.remove("active");
    }
    activeButton.classList.add("active");
    console.log(activeButton);
});


