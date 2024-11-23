// gsap.timeline(): Creates a GSAP timeline to sequence animations.

// The timeline allows you to control the order and timing of animations for elements on the page.

var tl = gsap.timeline();

tl.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});

tl.from("#line1-part", {
  opacity: 0,
  // onStart: Executes a function at the start of this animation.
  onStart: function() {
    // setInterval - loop after an particular interval
    var h5timer = document.querySelector("#line1-part h5");
    var grow = 0;
    // setInterval: Repeats the function every 35ms.

    // Effect: A counter animates from 0 to 100 over 35ms × 100 = 3.5 seconds.
    setInterval(function() {
      if (grow < 100) {
        h5timer.innerHTML = grow++;
      } else {
        h5timer.innerHTML = grow;
      }
    }, 35);
  },
});

tl.to(" .line h2",{
  animationName:"anime",
  opacity: 1
})

// Effect: The loader disappears after its animations complete.
tl.to("#loader", {
  opacity: 0,
  duration: 0.2,
  delay: 4,
});

tl.from("page1",{
  y:1600,
  opacity: 0,
  delay: 0.2,
  ease: Power4,
  duration: 0.5
})

tl.to("#loader", {
  display: "none"
});



// Summary of the Timeline

// The .line h1 elements slide in from below with a staggered effect.
// #line1-part and .line h2 fade in while a counter animates from 0 to 100.
// The #loader fades out after a delay, revealing the main page content.
