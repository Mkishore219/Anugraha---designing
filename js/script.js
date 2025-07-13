window.addEventListener("load", function () {
    ScrollTrigger.refresh();
});


function lenisScroll() {

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

}
lenisScroll()



// onLoadAnimation

function onLoadAnimation() {

    const tl1 = gsap.timeline(
        { delay: 0.5 }
    );



    tl1.from("header", {
        y: -200,
        duration: 1,
        opacity: 0
    }, "onload")
    tl1.from(".socialmedia-ban", {
        x: -200,
        duration: 1,
        stagger: 0.3
    }, "onload")
    tl1.from(".socialmedia-ban li", {
        x: -200,
        duration: 1,
        stagger: 0.3
    }, "onload")
    tl1.from("#banner .banner-txt h2", {
        y: 100,
        duration: 1,
        opacity: 0
    }, "onload")
    tl1.from(".carousel-control-prev", {
        y: 100,
        duration: 1,
        opacity: 1
    }, "onload")
    tl1.from(".carousel-control-next", {
        y: 100,
        duration: 1,
        opacity: 1
    }, "onload")
    tl1.from("#banner .banner-txt p", {
        y: 40,
        duration: 0.5,
        opacity: 0
    })
    tl1.from("#banner .banner-txt a", {
        y: 40,
        duration: 0.5,
        opacity: 0
    })



}

onLoadAnimation();




function hamNav() {
    const hamburger = document.querySelector("#hamburger");
    const mobileMenu = document.querySelector("#mobile-menu");
    const menuItems = mobileMenu.querySelectorAll("li");

    let menuOpen = false;

    gsap.set(mobileMenu, { y: -100, autoAlpha: 0 });
    gsap.set(menuItems, { y: 20, opacity: 0 });

    hamburger.addEventListener("click", () => {
        if (!menuOpen) {
            gsap.to(mobileMenu, {
                duration: 0.4,
                y: 0,
                autoAlpha: 1,
                ease: "power3.out",
                onComplete: () => {
                    gsap.to(menuItems, {
                        y: 0,
                        opacity: 1,
                        stagger: 0.2,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                }
            });
        } else {
            gsap.to(menuItems, {
                y: 20,
                opacity: 0,
                duration: 0.2,
                stagger: {
                    each: 0.1,
                    from: "end"
                },
                onComplete: () => {
                    gsap.to(mobileMenu, {
                        duration: 0.1,
                        y: -100,
                        autoAlpha: 0,
                        ease: "power2.in"
                    });
                }
            });
        }
        menuOpen = !menuOpen;
    });

    // Close on outside click
    document.addEventListener("click", function (e) {
        const isClickInsideMenu = mobileMenu.contains(e.target);
        const isClickOnHamburger = hamburger.contains(e.target);
        const isClickInsideHeader = document.querySelector("header").contains(e.target);

        if (menuOpen && !isClickInsideMenu && !isClickOnHamburger && !isClickInsideHeader) {
            gsap.to(menuItems, {
                y: 20,
                opacity: 0,
                duration: 0.2,
                stagger: {
                    each: 0.1,
                    from: "end"
                },
                onComplete: () => {
                    gsap.to(mobileMenu, {
                        duration: 0.1,
                        y: -100,
                        autoAlpha: 0,
                        ease: "power2.in"
                    });
                    menuOpen = false;
                }
            });
        }
    });
}

hamNav();








// about section home

function aboutSectionTextAmination() {


    //   ÷
    document.addEventListener("DOMContentLoaded", () => {
        // Register plugin FIRST
        gsap.registerPlugin(SplitText);

        // Then use SplitText
        const amination1 = new SplitText("#about h3", {
            type: "chars,words,lines",
            wordsClass: "word++", /* turn this on to get classes for each words */
            autoSplit: true,
            mask: "lines",
            onSplit: (self) => {
                split = gsap.from(self.lines, {
                    y: 30,
                    autoAlpha: 0,
                    stagger: {
                        amount: 0.5,
                        // from: "random"
                    },
                    scrollTrigger: {
                        trigger: "#about h3",
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                        // markers:"true"
                    }
                });
            }
        });

        // p
        // Then use SplitText
        const amination2 = new SplitText("#about p", {
            type: "chars,words,lines",
            wordsClass: "word++", /* turn this on to get classes for each words */
            autoSplit: true,
            mask: "lines",
            onSplit: (self) => {
                split = gsap.from(self.lines, {
                    y: 30,
                    autoAlpha: 0,
                    stagger: {
                        amount: 0.5,
                        // from: "random"
                    },
                    scrollTrigger: {
                        trigger: "#about p",
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                        // markers:"true"
                    }
                });
            }
        });



    });

};
aboutSectionTextAmination()


// aboutRevealImg
function aboutRevealImg() {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

    document.querySelectorAll("section#about img").forEach(img => {
        gsap.to(img, {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.8,
            ease: "power2.out", // optional ease
            scrollTrigger: {
                trigger: img,
                start: "top 80%",
                toggleActions: "play none none reverse",
                // markers: true
            }
        });
    });
}

aboutRevealImg();












// services section home

// services section home

function servicesSectionTextAmination() {


    //   ÷
    document.addEventListener("DOMContentLoaded", () => {
        // Register plugin FIRST
        gsap.registerPlugin(SplitText);

        // Then use SplitText
        const amination1 = new SplitText("#services h3", {
            type: "chars,words,lines",
            wordsClass: "word++", /* turn this on to get classes for each words */
            autoSplit: true,
            mask: "lines",
            onSplit: (self) => {
                split = gsap.from(self.lines, {
                    y: 30,
                    autoAlpha: 0,
                    stagger: {
                        amount: 0.5,
                        // from: "random"
                    },
                    scrollTrigger: {
                        trigger: "#services h3",
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                        // markers:"true"
                    }
                });
            }
        });

        // p
        // Then use SplitText
        const amination2 = new SplitText("#services p", {
            type: "chars,words,lines",
            wordsClass: "word++", /* turn this on to get classes for each words */
            autoSplit: true,
            mask: "lines",
            onSplit: (self) => {
                split = gsap.from(self.lines, {
                    y: 30,
                    autoAlpha: 0,
                    stagger: {
                        amount: 0.5,
                        // from: "random"
                    },
                    scrollTrigger: {
                        trigger: "#services p",
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                        // markers:"true"
                    }
                });
            }
        });



    });

};
servicesSectionTextAmination()

function servicesOwlCarousel() {
    $('#servicescard').owlCarousel({
        loop: true,
        margin: 20,
        center: false,
        rewind: false,
        nav: true,
        dots: false,
        autoplay: true,
        responsiveClass: true,
        navText: [
            '<i class="ri-arrow-left-line"></i>',  // Left arrow
            '<i class="ri-arrow-right-line"></i>'  // Right arrow
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1024: {
                items: 3,
            }
        }
    });
}
servicesOwlCarousel()












// projects section home

// projects section home

function projectsSectionTextAmination() {


    //   ÷
    document.addEventListener("DOMContentLoaded", () => {
        // Register plugin FIRST
        gsap.registerPlugin(SplitText);

        // Then use SplitText
        const amination1 = new SplitText("#projects h3", {
            type: "chars,words,lines",
            wordsClass: "word++", /* turn this on to get classes for each words */
            autoSplit: true,
            mask: "lines",
            onSplit: (self) => {
                split = gsap.from(self.lines, {
                    y: 30,
                    autoAlpha: 0,
                    stagger: {
                        amount: 0.5,
                        // from: "random"
                    },
                    scrollTrigger: {
                        trigger: "#projects h3",
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                        // markers:"true"
                    }
                });
            }
        });



    });

};
projectsSectionTextAmination()

// projectRevealImg
function projectRevealImg() {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

    document.querySelectorAll("section#projects .project-card img").forEach(img => {
        gsap.to(img, {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.8,
            ease: "power2.out", // optional ease
            scrollTrigger: {
                trigger: img,
                start: "top 80%",
                toggleActions: "play none none reverse",
                // markers: true
            }
        });
    });
}

projectRevealImg();


function projectsCursor() {
    document.addEventListener("DOMContentLoaded", () => {
        const cursor = document.querySelector("#custom-cursor");
        const links = document.querySelectorAll(".project-card a");

        let mouse = { x: 0, y: 0 };
        let pos = { x: 0, y: 0 };
        let isHovering = false;
        let activeLink = null;

        // Animate cursor position smoothly only when hovering
        gsap.ticker.add(() => {
            if (isHovering) {
                pos.x += (mouse.x - pos.x) * 0.1;
                pos.y += (mouse.y - pos.y) * 0.1;

                gsap.set(cursor, {
                    x: pos.x,
                    y: pos.y
                });
            }
        });

        links.forEach(link => {
            link.addEventListener("mouseenter", (e) => {
                isHovering = true;
                activeLink = link;

                mouse.x = e.clientX;
                mouse.y = e.clientY;
                pos.x = e.clientX;
                pos.y = e.clientY;

                cursor.style.display = 'flex';
                cursor.textContent = 'View';

                gsap.to(cursor, {
                    autoAlpha: 1,
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });

                link.addEventListener("mousemove", onMouseMove);
            });

            link.addEventListener("mouseleave", () => {
                isHovering = false;
                activeLink?.removeEventListener("mousemove", onMouseMove);

                gsap.to(cursor, {
                    autoAlpha: 0,
                    scale: 0.8,
                    duration: 0.5,
                    ease: "power2.in"
                });
            });
        });

        // Remove tracking on scroll (if not hovering)
        window.addEventListener("scroll", () => {
            if (!isHovering) {
                gsap.set(cursor, { autoAlpha: 0 });
            }
        });

        // Isolated function to handle internal mousemove
        function onMouseMove(e) {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }

        gsap.set(cursor, { autoAlpha: 0 });
    });
}

// projectsCursor();







// Showcase section home

function ShowcaseSectionTextAmination() {


    //   ÷
    document.addEventListener("DOMContentLoaded", () => {
        // Register plugin FIRST
        gsap.registerPlugin(SplitText);

        // Then use SplitText
        const amination1 = new SplitText("#Showcase h6", {
            type: "chars,words,lines",
            wordsClass: "word++", /* turn this on to get classes for each words */
            autoSplit: true,
            mask: "lines",
            onSplit: (self) => {
                split = gsap.from(self.lines, {
                    y: 30,
                    autoAlpha: 0,
                    stagger: {
                        amount: 0.5,
                        // from: "random"
                    },
                    scrollTrigger: {
                        trigger: "#Showcase h6",
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                        // markers:"true"
                    }
                });
            }
        });

        // p
        // Then use SplitText
        const amination2 = new SplitText("#Showcase p", {
            type: "chars,words,lines",
            wordsClass: "word++", /* turn this on to get classes for each words */
            autoSplit: true,
            mask: "lines",
            onSplit: (self) => {
                split = gsap.from(self.lines, {
                    y: 30,
                    autoAlpha: 0,
                    stagger: {
                        amount: 0.5,
                        // from: "random"
                    },
                    scrollTrigger: {
                        trigger: "#Showcase p",
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                        // markers:"true"
                    }
                });
            }
        });



    });

};
ShowcaseSectionTextAmination()








// whyus section home

function whyusSectionTextAmination() {


    //   ÷
    document.addEventListener("DOMContentLoaded", () => {
        // Register plugin FIRST
        gsap.registerPlugin(SplitText);

        // Then use SplitText
        const amination1 = new SplitText("#why-us h3", {
            type: "chars,words,lines",
            wordsClass: "word++", /* turn this on to get classes for each words */
            autoSplit: true,
            mask: "lines",
            onSplit: (self) => {
                split = gsap.from(self.lines, {
                    y: 30,
                    autoAlpha: 0,
                    stagger: {
                        amount: 0.5,
                        // from: "random"
                    },
                    scrollTrigger: {
                        trigger: "#why-us h3",
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                        // markers:"true"
                    }
                });
            }
        });

        // p
        // Then use SplitText
        const amination2 = new SplitText("#why-us p", {
            type: "chars,words,lines",
            wordsClass: "word++", /* turn this on to get classes for each words */
            autoSplit: true,
            mask: "lines",
            onSplit: (self) => {
                split = gsap.from(self.lines, {
                    y: 30,
                    autoAlpha: 0,
                    stagger: {
                        amount: 0.5,
                        // from: "random"
                    },
                    scrollTrigger: {
                        trigger: "#why-us p",
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                        // markers:"true"
                    }
                });
            }
        });



    });

};
whyusSectionTextAmination()

// whyusRevealImg
function whyusRevealImg() {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

    document.querySelectorAll("section#why-us img").forEach(img => {
        gsap.to(img, {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.8,
            ease: "power2.out", // optional ease
            scrollTrigger: {
                trigger: img,
                start: "top 80%",
                toggleActions: "play none none reverse",
                // markers: true
            }
        });
    });
}

whyusRevealImg();








// toTopBtn
function toTopBtn() {
    
    document.addEventListener("DOMContentLoaded", () => {
        const topBtn = document.querySelector(".top-btn a");
    
        topBtn.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default anchor behavior
    
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Smooth scroll
            });
        });
    });

}
toTopBtn()
