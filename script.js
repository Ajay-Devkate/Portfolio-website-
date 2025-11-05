
var icon = document.querySelector("#nav-i");
var navi = document.querySelector("#nav-r");

var tl = 0;

icon.addEventListener("click", () => {
    if(tl==0){
        navi.classList.remove("okk");
        console.log("Hello Ji !");
        tl=1;
    } else {
        navi.classList.add("okk");
        console.log("Bye Ji !");
        tl=0;
    }
})


function scrollCDN() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },

        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },

        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
scrollCDN();

var tl = gsap.timeline();

tl.from(".nav-left", {
    y: "-150%",
    duration: 1,
    opacity: 0,
})
    .from(".nav-right", {
        y: "-150%",
        duration: 1,
        delay: -0.2,
        opacity: 0,
    })
    .from("#nav-i", {
        y: "-150%",
        duration: 1,
        delay: -0.8,
        opacity: 0,
    })
    .from(".page1-hero", {
        duration: 1,
        delay: -0.2,
        opacity: 0,
        scale: 1.5,
    })


gsap.from(".about-cards", {
    scale: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".about-cards",
        scroller: "#main",
        scrub: 2,
        end: "top 50%",
        start: "top 110%"
    }
})

gsap.from(".frontend-skills", {
    scale: 0,
    opacity: 0,
    x: "-100%",
    duration: 1,
    scrollTrigger: {
        trigger: ".frontend-skills",
        scroller: "#main",
        scrub: 2,
        end: "top 50%",
        start: "top 100%"
    }
})
gsap.from(".project-cards", {
    y: "30%",
    duration: 1,
    scrollTrigger: {
        trigger: ".project-cards",
        scroller: "#main",
        scrub: 2,
        end: "top 50%",
        start: "top 100%"
    }
})


