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
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll > 30){
        document.querySelector('nav').classList.add('bg-white');
        document.querySelector('nav').classList.add('shadow');
    }
    else{
        document.querySelector('nav').classList.remove('bg-white');
        document.querySelector('nav').classList.remove('shadow');
    }
});