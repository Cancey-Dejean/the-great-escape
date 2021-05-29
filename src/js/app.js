gsap.to(".bg", {
  duration: 2,
  width: "100%",
  ease: Expo.easeInOut
})


// Navbar
gsap.from(".navbar", {
  duration: 1.5,
  opacity: 0,
  delay: 2.5,
  y: 20,
  ease: Expo.easeInOut
})

// Social Media
gsap.from(".media ul li", {
  duration: 2.8,
  opacity: 0,
  delay: 2.5,
  x: -30,
  ease: Expo.easeInOut,
  stagger: {
    amount: 0.08,
  },
})

// Text
gsap.from(".text h1 .hidetext", {
  duration: 1.5,
  delay: 1.6,
  y: "100%",
  ease: Expo.easeInOut
})

gsap.from(".text p .hidetext", {
  duration: 1.5,
  delay: 2,
  y: "100%",
  ease: Expo.easeInOut
})

// Desc
gsap.from(".desc ul li", {
  duration: 1.5,
  delay: 2,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
  stagger: {
    amount: 0.1,
  }
})

gsap.from(".desc p", {
  duration: 1.5,
  delay: 2.3,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
})

// Scroll Down
gsap.from(".scrolldown", {
  duration: 1.5,
  delay: 2.7,
  opacity: 0,
  y: 200,
  ease: Expo.easeInOut,
})

// Bottom Nav
gsap.from(".bottomnav", {
  duration: 1.5,
  delay: 3.2,
  opacity: 0,
  y: 30,
  ease: Expo.easeInOut,
})
gsap.from(".bottomnav .next", {
  duration: 1.5,
  delay: 3.5,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
})