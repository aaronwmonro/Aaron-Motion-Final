import {gsap} from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#circle",{transformOrigin: "center"});
gsap.set("#bmw",{transformOrigin: "center"});

const lineTL = gsap.timeline();
lineTL.fromTo(".lines",{drawSVG:"0%"}, {duration: 1.5, drawSVG:"100% 85%"})
.fromTo(".lines-2",{drawSVG:"0%"}, {duration: 1.5, drawSVG:"100% 90%"}, "-=1.25")
.fromTo(".lines-3",{drawSVG:"0%"}, {duration: 1.5, drawSVG:"100% 96%"}, "-=1.25")
.to(".to-red",{duration:.5, stroke: "#FE0000", ease: "none"}, "-=1")
.to(".line",{duration:.5, opacity: 0}, "-=.75")
.to("#circle",{duration:.5, opacity: 1}, "-=1")
.from("#circle", {drawSVG:"95% 85%", rotate: 720, duration: 2, ease: "none"}, "-=1.3")
.to("#circle",{duration:.5, scale: .9}, "-=.1")
.to("#circle",{duration:.25, scale: 1, opacity: 0}, "bmw")
.from("#bmw",{duration:.25, scale: .9, opacity: 0}, "bmw")
// .to("#bmw",{duration:.5, scale: .7, opacity: 0}, "+=1")
.to("#bmw-top-left",{duration:.5, yPercent:-200, opacity: 0}, "+=1")
.to("#bmw-top-right",{duration:.5, xPercent:200, opacity: 0}, "-=0.5")
.to("#bmw-bottom-right",{duration:.5, yPercent:200, opacity: 0}, "-=0.5")
.to("#bmw-bottom-left",{duration:.5, xPercent:-200, opacity: 0}, "-=0.5")
// .to("#circle", {drawSVG:"true", duration: 1})
       

export function lineAnimation(){

        return lineTL;
}
