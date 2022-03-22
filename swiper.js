const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true
});

var buttons = document.getElementsByClassName("customers-button");
for (var x of buttons) {
    x.addEventListener("click", function () {
        for (var y of buttons) {
            y.classList.remove("active");
        }

        this.classList.add("active");
        var index = this.getAttribute("index");
        swiper.slideTo(index, 1000);
    })
}