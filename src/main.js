gsap.registerPlugin(ScrollTrigger);

let panels = gsap.utils.toArray(".panel:not(:last-child)");
  
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "+=300%",
    scrub: true,
    pin: true
  }
});


let stayTime = 1; // seconds between each text flip on the timeline (not literally seconds on screen - we're just spacing them out on the timeline)
let textElements = gsap.utils.toArray(".text"); // get an Array of all the ".text" elements

// loop through each text element and add an autoAlpha flip at the appropriate times on the timeline
textElements.forEach((el, i) => {
  tl.set(el, {autoAlpha: 1}, i * stayTime);
  if (i !== 0) { // if it's the first one, we don't need to toggle the previous one off.
    tl.set(textElements[i - 1], {autoAlpha: 0}, i * stayTime);
  }
});


// add some space at the end of the timeline so the last one stays for the correct duration before things get unpinned.
 tl.set({}, {delay: stayTime});

tl.to("#heroPanel", {
  yPercent: -100
});

tl.to(".panel.black", {
  yPercent: -100
});

// panels.forEach(panel => {
//   let content = panel.querySelector("div");

//  tl.to("#para-text", {opacity: 0,}
// );
// });
/*let stayTime = 1; // seconds between each text flip on the timeline (not literally seconds on screen - we're just spacing them out on the timeline)
let textElements = gsap.utils.toArray(".text"); // get an Array of all the ".text" elements

// loop through each text element and add an autoAlpha flip at the appropriate times on the timeline
textElements.forEach((el, i) => {
  tl.set(el, {autoAlpha: 1}, i * stayTime);
  if (i !== 0) { // if it's the first one, we don't need to toggle the previous one off.
    tl.set(textElements[i - 1], {autoAlpha: 0}, i * stayTime);
  }
});
// add some space at the end of the timeline so the last one stays for the correct duration before things get unpinned.
tl.set({}, {delay: stayTime});


//text fade 

tl.to('#para-text', {opacity: 0,});

    })

*/

gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});

