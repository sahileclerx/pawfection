// responsive navbar
var button = document.querySelector('.navtoggler');
var navicon = document.querySelector('.navtoggler i');
var navblock = document.querySelector('.navlist');
button.addEventListener('click', function(){
    if(navblock.classList.contains("left-0")){
        navblock.classList.remove("left-0");
        navblock.classList.add("left-[-100%]");
        navicon.classList.remove('fa-close');
        navicon.classList.add('fa-bars');
    }
    else{
        navblock.classList.add("left-0");
        navblock.classList.remove("left-[-100%]");
        navicon.classList.remove('fa-bars');
        navicon.classList.add('fa-close');
    }
})

// nav bg white on scroll
var header = document.querySelector('header');
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll > 30){
        header.classList.add('bg-white');
        header.classList.add('shadow');
    }
    else{
        header.classList.remove('bg-white');
        header.classList.remove('shadow');
    }
});

// Swiper
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swpr-btn-nxt",
      prevEl: ".swpr-btn-prev",
    },
  });