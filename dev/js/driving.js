import {gsap} from "gsap";

const driveTL = gsap.timeline();
driveTL
.fromTo("#d",{duration: 1, x:100, scale:.5}, {duration: 1, alpha:1, x:0}, "driving")
.to("#p",{duration: .75, x:150}, "driving")
.to("#d",{duration: 1, scale:1}, "-=.75")
.to("#speed-number",{ onComplete: countIt, duration: 0, ease: "none"}, "+=.75")
.to("#rmp-number",{ onComplete: countItRMP, duration: 0, ease: "none"}, "+=.75")
.to("#speed-rectangle",{y: -73, duration: 3, ease: "none"},"-=.75")
.to("#speed-number",{x: -50, duration: .5, ease: "none"}, "-=2.25")
.to("#rpm-rectangle",{y: -61, duration: 3, ease: "none"},"-=3")


      


       
export function driveAnimation(){

        return driveTL;
}

const gpsTL = gsap.timeline();
gpsTL.to("#map-lines",{duration: 3, y:90, ease: "Power1.easeIn"})
.to("#map-lines",{duration: 1.5, y:0, onComplete: countItDown, rotate: 13, ease: "none"})
.to("#map-lines",{duration: 0, onComplete: countItDownTwo})
.to("#rpm-rectangle",{y: 0, duration: 5, ease: "none"}, "slowDown")
.to("#speed-rectangle",{y: 0, duration: 5, ease: "none"}, "slowDown")
.to("#map-lines",{duration: 5, y:170, ease: "Power1.easeOut"}, "slowDown")
.to("#p", {scale:.5, alpha: 0, duration: 1})
.to("#p", {duration: 1, alpha:1, x:0}, "parking")
.to("#d",{duration: .75, x:150}, "parking")
.to("#p",{duration: 1, scale:1}, "-=.75")

     
export function gpsAnimation(){

        return gpsTL;
}
gsap.set("#map-lines",{transformOrigin: "-400 430"});

var startCount = 0,
    endCount,
    activeIndex = 1,
    tm = 3,
    num = { var: startCount },
    numbers = document.getElementById("speed-number-span");
    

function countIt() {
activeIndex == 1 ? endCount = 30 : endCount = 30;
gsap.to(num, tm, {var: endCount, onUpdate:changeNumber, ease: "none"});
}

function changeNumber() {
  numbers.innerHTML = (num.var).toFixed();  
}

var startCountDown = 30,
    endCountDown,
    activeIndexDown = 1,
    tmDown = 5,
    numDown = { var: startCountDown },
    numbersDown = document.getElementById("speed-number-span");
    

function countItDown() {
activeIndexDown == 1 ? endCountDown = 0 : endCountDown = 0;
gsap.to(numDown, tmDown, {var: endCountDown, onUpdate:changeNumberDown, ease: "none"});
}

function changeNumberDown() {
  numbersDown.innerHTML = (numDown.var).toFixed();  
}

var startCountDownTwo = 3,
    endCountDownTwo,
    activeIndexDownTwo = 1,
    tmDownTwo = 5,
    numDownTwo = { var: startCountDownTwo },
    numbersDownTwo = document.getElementById("rpm-numbers-span");
    

function countItDownTwo() {
activeIndexDownTwo == 1 ? endCountDownTwo = 0 : endCountDownTwo = 0;
gsap.to(numDownTwo, tmDownTwo, {var: endCountDownTwo, onUpdate:changeNumberDownTwo, ease: "none"});
}

function changeNumberDownTwo() {
  numbersDownTwo.innerHTML = (numDownTwo.var).toFixed();  
}

var startCountRPM = 0,
    endCountRPM,
    activeIndexRPM = 1,
    tmRPM = 3,
    numRPM = { var: startCountRPM },
    numbersRPM = document.getElementById("rpm-numbers-span");
    

function countItRMP() {
activeIndexRPM == 1 ? endCountRPM = 3 : endCountRPM = 3;
gsap.to(numRPM, tmRPM, {var: endCountRPM, onUpdate:changeNumberRMP, ease: "none"});
}

function changeNumberRMP() {
  numbersRPM.innerHTML = (numRPM.var).toFixed();  
}