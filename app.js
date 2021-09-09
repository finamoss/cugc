/*
mobile-menu
exit-btn
bars
header //mobile header
desktop-header //desktop header

*/
var video = document.querySelector('video');
video.muted = true;
video.play()

let bars = document.querySelector(".bars");
let mobileMenu = document.querySelector(".mobile-menu");
bars.addEventListener("click", ()=>{
    mobileMenu.style.display = "flex";
    mobileMenu.style.left = 0;
});

let mobileLink = document.querySelectorAll(".mobile-link");

    mobileLink.forEach((item)=>{
        item.addEventListener("click", ()=>{
            mobileMenu.style.display = "none";
            mobileMenu.style.left = -5000;
            
        }
        );
    })

exitbtn = document.querySelector(".exit-btn");
exitbtn.addEventListener("click", ()=>{
    mobileMenu.style.display = "none";
    mobileMenu.style.left = -5000;

});

window.addEventListener("resize", ()=>{
    if(window.innerWidth >= 695){
        mobileMenu.style.display = "none";
        mobileMenu.style.left = -5000;
    }
})

gsap.fromTo('.certpic', {y: 0}, {y: -10, duration: 2, yoyo: true, repeat: -1}); //Animate Logo(HEADER, mobile)

//Setup Scroll Change for the About Section ***
let controller = new ScrollMagic.Controller();
let tl1 = new TimelineMax();
tl1.fromTo('.about-wrapper', {y: 800, opacity: -5}, {y: 0, opacity: 1, duration: 2})

let scene = new ScrollMagic.Scene({
  triggerElement: "#trigger1",
  triggerHook: 0
})
//   .addIndicators({
//     colorTrigger: "white",
//     colorStart: "white",
//     colorEnd: "white",
//     indent: 5
//   })
  .setTween(tl1)
  .addTo(controller);

//Setup Scroll Change for the Services Section ***
controller = new ScrollMagic.Controller();
tl1 = new TimelineMax();
tl1.fromTo('.services-wrapper', {y: 800, opacity: -5}, {y: 0, opacity: 1, duration: 4})

scene = new ScrollMagic.Scene({
  triggerElement: "#trigger2",
  triggerHook: 0
})//.addIndicators({
//     colorTrigger: "red",
//     colorStart: "red",
//     colorEnd: "red",
//     indent: 5
//   })
  .setTween(tl1)
  .addTo(controller);
/*

//Individual Element Animations ***
//gsap.fromTo(".midline", {x: -1000, opacity: 0}, {x: 0, duration: 1.4, opacity: 1}); //Fly in text
gsap.fromTo(".banner-text", {opacity: 0}, {opacity: 1, duration: 6}); //Fade in hero banner
gsap.fromTo('.logo', {x: -10}, {x: 0, duration: 5, yoyo: true, repeat: -1}); //Animate Logo(HEADER, mobile)



//Setup Scroll Change for the Description Section ***
var controller = new ScrollMagic.Controller();
tl2 = new TimelineMax();
tl2.fromTo('.midline', {x: -5000, opacity: 0}, {x: 0, duration: 1.4, opacity: 1});

var scene = new ScrollMagic.Scene({
  triggerElement: "#trigger2",
  triggerHook: 0
})
//   .addIndicators({
//     colorTrigger: "white",
//     colorStart: "white",
//     colorEnd: "white",
//     indent: 5
//   })
  .setTween(tl2)
  .addTo(controller);


/*Setup Page Transitions
const loadingEnter = () =>{
    let startHere = gsap.timeline();
    startHere.fromTo('.view-menu', {
        y: 0
    }, {y: "100%"
        ,
        duration: 2
    })
}
const loadingLeave = () =>{
    let startHere = gsap.timeline();
    startHere.fromTo('.banner', {
        x: "100%"
    }, {x: 0
        ,
        duration: 1
    })
}


const delay = (n)=>{
    return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve();
            }, n)
        })
};

barba.init({
    sync: true,
    transitions: [
        {   //start - object inside of transition array
            name: 'page-wipe',
            async leave(data){
                const done = this.async();
                
                await delay(2000);
                done();
                let startHere = gsap.timeline();
                startHere.to('.view-menu', {
                    y: "100%"
                });
            },
            async enter(data){
                let startHere = gsap.timeline();
                startHere.to('.view-menu', {
                    y: "100%"
                });
                console.log('entering Page Animation');
            }
        }//End - object inside of transition array
    ]//End Transitions Key



})
/*
Use a website link to get information

if the info comes back the way you want, run a function that says it was completed
if the infor comes back NOT the way you want, run a function that says there was an error and it was not completed. 

after we know whehter it was completed or rejected, save the info in an object.

use the object to do something if it was completed or to do something if it was rejected

let myName = 'John';

let myPromiseObject = new Promise(
    (resolve, reject) =>{
            if(myName == 'roger')
                resolve(myName);
            else
                reject(myName)
    }
);

myPromiseObject
.then(
        ()=>{console.log("it worked - hi roger")}
)
.catch(
        ()=>{console.log("it failed - who are you???")}
    )


async function hello(){
    this will automatically return a promise.
}
const sing = async (songGuess)=>{
    this will automatically return a promise. (you don't have to say "return a promise");
    if you type "RETURN " + SOME VALUE, the promise will be considered resoved. 
    if you THROW AN ERROR, the promise will be considered rejected.

    example:
    if songGuess == true
    return "its working! :) "
    else 
    throw "it broke! :( "
}

sing("a whole new world")
    .then(
        (correct) => {
            console.log("that's the right song!" + correct)
        }
    )
    .catch(
        (incorrect) => {
            console.log("that's the wrong song!" + incorrect)
        }
    )


    AWAIT
    Waits for the promise to be resolved before moving onto the next thing.
*/