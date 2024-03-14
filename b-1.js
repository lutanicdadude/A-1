window.onload = function() {
    // Fading slider
    // let currentIndex = 0;
    // const slider = document.querySelectorAll(".slider");
    // slider.forEach(img => img.style.opacity = "0");
    // slider[0].style.opacity = "1";

    // setInterval(() => {
    //     let nextIndex = (currentIndex + 1) % slider.length;
    //     slider[currentIndex].style.opacity = "0";
    //     slider[nextIndex].style.opacity = "1";
    //     slider.forEach(img => img.style.transition = "all 1s");
    //     currentIndex = nextIndex;
    // }, 3000);

    // sliding slider

    let currentIndex = 0;
    const sliderWrap = document.querySelector(".sliderWrap");
    const slider = document.querySelectorAll(".slider");
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);
    sliderWrap.appendChild(sliderClone);

    setInterval(() => {
        currentIndex++;
        sliderWrap.style.marginLeft = -currentIndex * 100 + "%";
        sliderWrap.style.transition = "all 0.6s";

        if (currentIndex == 3) {
            setTimeout(() => {
                sliderWrap.style.transition = "0s";
                sliderWrap.style.marginLeft = "0";
                currentIndex = 0;
            }, 700);
        }
    }, 3000);

    // Second function: Navigation dropdown
    let navList = document.querySelectorAll(".nav > ul > li");

    navList.forEach(function(navItem){
        navItem.addEventListener("mouseover", function(){
            this.querySelector(".submenu").style.height="155px";
        });
    });

    navList.forEach(function(navItem){
        navItem.addEventListener("mouseout", function(){
            this.querySelector(".submenu").style.height="0px";
        });
    });
}


