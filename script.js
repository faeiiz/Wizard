var tl = gsap.timeline();
const lenis = new Lenis({
  autoRaf: true,
});
lenis.on("scroll", (e) => {
  ScrollTrigger.update();
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function page1Animate() {
  tl.from("nav h1,nav h5, nav button", {
    y: -30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
  });

  tl.from(".center h2", {
    x: -400,
    opacity: 0,
    duration: 0.6,
  });
  tl.from(".center p", {
    x: -400,
    opacity: 0,
    duration: 0.6,
  });
  tl.from(".center button", {
    x: -400,
    opacity: 0,
    duration: 0.6,
  });

  tl.from(
    ".center img",
    {
      x: 300,
      opacity: 0,
      duration: 0.5,
    },
    "-=1"
  );
}
function page2Animate() {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 50%",
      end: "top -20%",
      scrub: 5,
    },
  });

  tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });
  tl2.from(
    "#left",
    {
      x: -100,
      opacity: 0,
      duration: 1,
    },
    "anim"
  );
  tl2.from(
    "#right",
    {
      x: 100,
      opacity: 0,
      duration: 1,
    },
    "anim"
  );
}
page1Animate();
page2Animate();
