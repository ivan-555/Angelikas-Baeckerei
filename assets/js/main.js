// open and close navbar
const navbar = document.querySelector("#navbar");
const hamburger = document.querySelector(".hamburger");

let navbarStatus = "closed";

hamburger.onclick = () => {
    if (navbarStatus == "closed") { //to open the navbar
        if (window.matchMedia('(max-width: 1450px)').matches) {
            hamburger.classList.add("shiftRight"); //css class to shift the hamburger/X icon INSIDE the navbar when it opens
        }
        if (window.matchMedia('(max-width: 600px)').matches) {
            navbar.style.transform = "translateX(-100%)"; //makes the navbar fullscreen on small device
        } else {
            navbar.style.transform = "translateX(-400px)";  //normal navbar size
        }
        navbarStatus = "open"; //set to open
        hamburger.classList.remove("toHamburger"); //removes toHamburger Animation
        hamburger.classList.add("toX"); //add toX Animation
    } else { //to close the navbar
        hamburger.classList.remove("shiftRight"); // remove css class to keep hamburger icon visible when navbar is closed
        navbar.style.transform = "translateX(0px)"; //closes navbar
        navbarStatus = "closed"; //set to closed
        hamburger.classList.remove("toX"); //remove toX Animation
        hamburger.classList.add("toHamburger"); // add toHamburger Animation
    }
}


//auto close navbar on small screen when navbar is fullscreen if you click a link tag
const navbarLinks = navbar.querySelectorAll("a")

if (window.matchMedia('(max-width: 600px)').matches) {
    navbarLinks.forEach((link) => {
        link.onclick = () => {
            hamburger.classList.remove("shiftRight"); // remove css class to keep hamburger icon visible when navbar is closed
            navbar.style.transform = "translateX(0px)"; //closes navbar
            navbarStatus = "closed"; //set to closed
            hamburger.classList.remove("toX"); //remove toX Animation
            hamburger.classList.add("toHamburger"); // add toHamburger Animation
        }
    })
}

//highlight nav links if on section
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
    let currentSection = "home";
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 400) {    //if the top end of the section with a prefered offset is less than the windows scrollY
            currentSection = section.id; //set the section we are on as current Section
        }
    });

    navLinks.forEach(nav => {
        if (nav.getAttribute("href") === `#${currentSection}`) { //set active class on the nav with the correct id = same as the current section
            nav.classList.add("active");
        } else {
            nav.classList.remove("active"); //remove active class from all other navs
        }
    });

    // Überprüfe, ob sich der Benutzer am Ende der Seite befindet
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // 
        navLinks.forEach((nav, index) => {
            if (index === navLinks.length - 1) {   //setzt die klasse active aufs letzte nav wenn der Benutzer am Ende der Seite ist
                nav.classList.add("active");
            } else {  //entfernt die active klasse von allen anderen nav wenn der Benutzer am Ende der Seite ist
                nav.classList.remove("active");
            }
        });
    } else {
        // entfernt die klasse active vom letzten nav wenn der Benutzer nicht am Ende der Seite ist
        navLinks[navLinks.length - 1].classList.remove("active");
    }
});


// decoBars Animations on visible
const öffnungszeitenDecoBAr = document.querySelector("#öffnungszeiten .decoBar")
const kontaktDecoBAr = document.querySelector("#kontakt .decoBar")

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show")
        }
    })
})

observer.observe(öffnungszeitenDecoBAr);
observer.observe(kontaktDecoBAr);
