// responsive navbar
var button = document.querySelector('.navtoggler');
var navicon = document.querySelector('.navtoggler i');
var navblock = document.querySelector('.navlist');
button.addEventListener('click', function () {
    if (navblock.classList.contains("left-0")) {
        navblock.classList.remove("left-0");
        navblock.classList.add("left-[-100%]");
        navicon.classList.remove('fa-close');
        navicon.classList.add('fa-bars');
    }
    else {
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
    if (scroll > 30) {
        header.classList.add('bg-white');
        header.classList.add('shadow');
    }
    else {
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

// Parallax Elements move
document.addEventListener("mousemove", parallax);
const elem = document.querySelectorAll(".parallax");
function parallax(e) {
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    elem.forEach((el) => {
        el.classList.add('transition-all', 'ease-linear', 'duration-0');
        el.style.transform = `translateX(-${_mouseX / 100 * 5}px) translateY(-${_mouseY / 100 * 5}px)`;
    })
}

// AOS
AOS.init();

// Cursor Follower
document.querySelector('body').addEventListener('mousemove', function (e) {
    gsap.to('#cursor', {
        x: e.clientX - 7,
        y: e.clientY - 60,
        duration: 1,
    })
})

document.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('mouseenter', function (e) {
        gsap.to('#cursor', {
            scale: 2,
            background: 'transparent',
            border: '1px dashed #ccc',
        })
    })

    a.addEventListener('mouseleave', function (e) {
        gsap.to('#cursor', {
            scale: 1,
            background: '#333',
            border: 'none',
        })
    })
})

// Hero Reveal 
const tl = gsap.timeline();

tl.from('.logo', {
    y: -100,
  ease: "power4.out",
  delay: .2,
  opacity: 0,
  skewY: -10,
  stagger: {
    amount: 0.3
  }
}, "nav")

tl.from("h1", {
  y: 100,
  ease: "power4.out",
  opacity: 0,
  skewY: 7,
  stagger: {
    amount: 0.3
  }
}, "hero")

tl.from(".scroll", {
    y: 100,
    ease: "power4.out",
    opacity: 0,
    skewY: 7,
    stagger: {
      amount: 0.3
    }
  }, "hero")

  tl.from(".image", {
    y: 100,
    ease: "power4.out",
    opacity: 0,
    skewY: 7,
    stagger: {
      amount: 0.3
    }
  }, "hero")

  tl.from(".text", {
    y: 100,
    ease: "power4.out",
    opacity: 0,
    skewY: 7,
    stagger: {
      amount: 0.3
    }
  }, "hero")

tl.from(".navlist li", {
    y: 100,
    ease: "power4.out",
    opacity: 0,
    skewY: 7,
    stagger: {
      amount: 0.3
    }
  }, "nav")

  tl.from(".navtoggler", {
    y: 100,
    ease: "power4.out",
    opacity: 0,
    skewY: 7,
    stagger: {
      amount: 0.3
    }
  }, "nav")

  tl.from(".cta", {
    x: 100,
    duration: 2,
    ease: "power4.out",
    opacity: 0,
  }, "nav")

//   hero Image Hover
if(window.innerWidth > 500){
    document.querySelector('.image .rounded-full').addEventListener('mousemove', function (e) {
        gsap.to('.image .rounded-full', {
            x: e.clientX / 10,
            y: e.clientY / 10,
            duration: 1,
        })
    })
}

document.querySelector('.image .rounded-full').addEventListener('mouseleave', function (e) {
    gsap.to('.image .rounded-full', {
        x: 0,
        y: 0,
        duration: 1,
    })
})

// Scrolltriger showcase
if(window.innerWidth > 500){
let t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".showcase",
      scrub: true,
      markers: true,
      pin: true,
    } 
  })
  t2.from(".showcase img.max-w-full", {
    duration: 1,
    y: 400,
    opacity: 0,
    stagger: {
        amount: 10,
    }
  })
  t2.from(".showcase img:not(.max-w-full)", {
    duration: 1,
    scale: 0.2,
    opacity: 0,
    stagger: {
        amount: 10,
    }
  })
}