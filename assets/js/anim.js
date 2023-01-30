AOS.init({ once: true, duration: 500 });

// Home Animations
function homeAnimation() {
  let tl = gsap.timeline({ ease: "Expo.easeOut" });
  tl.fromTo(".hero-img", { scale: 1.5 }, { scale: 1, duration: 1 });
  tl.fromTo(
    ".home-content h1",
    { translateY: -100, opacity: 0 },
    { translateY: 0, opacity: 1, duration: 1 }
  );
  tl.fromTo(
    ".home-content p",
    { translateY: -100, opacity: 0 },
    { translateY: 0, opacity: 1, duration: 1 },
    "-=0.5"
  );
  tl.fromTo(
    ".home-content div",
    { translateY: 100, opacity: 0 },
    { translateY: 0, opacity: 1, duration: 1 },
    "-=1"
  );
}

// about Animation
function callAnimation() {
  let tl = gsap.timeline({
    ease: "Expo.easeOut",
  });

  tl.fromTo(
    ".call-left",
    { translateY: -100, opacity: 0 },
    { translateY: 0, opacity: 1, duration: 1 }
  );
  tl.fromTo(
    ".card-1",
    { translateY: -50, opacity: 0 },
    { translateY: 50, opacity: 1, duration: 1 },
    "-=0.5"
  );
  tl.fromTo(
    ".card-2",
    { translateY: -30, opacity: 0 },
    { translateY: -60, opacity: 1, duration: 1 },
    "-=0.5"
  );
}

window.addEventListener("load", () => {
  homeAnimation();
});

// footer Animation
function footerAnimation() {
  let tl = gsap.timeline({
    ease: "Expo.easeOut",
  });

  const elements = [
    ".footer-about",
    ".footer-links",
    ".footer-c",
    ".footer-socials",
  ];

  tl.to("#footer .container", { top: "20%", duration: 1 });

  elements.forEach((element) => {
    tl.to(element, { translateY: "0%", duration: 1 }, "-=0.5");
  });
  tl.to(".footer-links li", { opacity: 1, duration: 1, stagger: 0.2 }, "-=1");
  tl.to(".footer-socials", { opacity: 1, duration: 1 }, "-=2");
}

// Intersection Observer

const callSection = document.querySelector("#call");
const footerSection = document.querySelector("#footer");

let sections = [callSection, footerSection];

const options = {
  threshold: window.innerWidth > 992 ? 0.5 : 0.2,
};
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.id === "call") {
        callAnimation();
        observer.unobserve(entry.target);
      } else {
        footerAnimation();
        observer.unobserve(entry.target);
      }
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
