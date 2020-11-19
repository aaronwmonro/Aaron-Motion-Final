import {gsap} from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(GSDevTools);

import {GSDevTools} from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#circle",{transformOrigin: "center"});
gsap.set("#bmw",{transformOrigin: "center"});
gsap.set("#intro-group",{transformOrigin: "center"});
gsap.set("#bmw-top-left",{transformOrigin: "right bottom"});
gsap.set("#bmw-top-right",{transformOrigin: "right bottom"});
gsap.set("#bmw-bottom-left",{transformOrigin: "right bottom"});
gsap.set("#bmw-bottom-right",{transformOrigin: "right bottom"});
gsap.set(".logo-bmw",{transformOrigin: "right bottom"});

const lineTL = gsap.timeline();
lineTL.fromTo(".lines",{drawSVG:"0%"}, {duration: 1.5, drawSVG:"100% 85%"})
.fromTo(".lines-2",{drawSVG:"0%"}, {duration: 1.5, drawSVG:"100% 90%"}, "-=1.25")
.fromTo(".lines-3",{drawSVG:"0%"}, {duration: 1.5, drawSVG:"100% 96%"}, "-=1.25")
.to(".to-red",{duration:.5, stroke: "#009ADA", ease: "none"}, "-=1")
.to(".line",{duration:.5, opacity: 0}, "-=.75")
.to("#circle",{duration:.5, opacity: 1}, "-=1")
.from("#circle", {drawSVG:"95% 85%", rotate: 720, duration: 2, ease: "none"}, "-=1.3")
.to("#circle",{duration:.5, scale: .8}, "-=.1")
.to("#circle",{duration:1, scale: 1, opacity: 0}, "bmw")
.from("#bmw",{duration:1, scale: .8, opacity: 0}, "bmw")
// .from("#bmw-top-left",{duration:1.5, scale: .0, rotate: 360}, "bmw")
.from("#bmw-top-left",{duration:1.5, rotate: 360, opacity: 0}, "bmw")
.from("#bmw-top-right",{duration:1.5, rotate: 360, opacity: 0}, "bmw")
.from("#bmw-bottom-right",{duration:1.5,  rotate: 0, opacity: 0}, "bmw")
.from("#bmw-bottom-left",{duration:1.5, rotate: 0, opacity: 0}, "bmw")
.from("#bmw-bottom-left",{duration:.5})
.to("#bmw-top-left",{duration:.5, rotate: 360, opacity: 0}, "bmwAway")
.to("#bmw-top-right",{duration:.5, rotate: 360, opacity: 0}, "bmwAway")
.to("#bmw-bottom-right",{duration:.5,  rotate: 0, opacity: 0}, "bmwAway")
.to("#bmw-bottom-left",{duration:.5, rotate: 0, opacity: 0}, "bmwAway")
// .to("#bmw-top-left",{duration:1.5, scale: .0, rotate: 360}, "bmwAway")
// .to("#bmw-top-right",{duration:1.5, scale: .0,  rotate: 360}, "bmwAway")
// .to("#bmw-bottom-left",{duration:1.5, scale: .0,  rotate: 360}, "bmwAway")
// .to("#bmw-bottom-right",{duration:1.5, scale: .0, rotate: 360}, "bmwAway")
// .to("#bmw",{duration:.5, scale: .7, opacity: 0}, "+=1")
// .to("#bmw-top-left",{duration:.5, yPercent:-200, opacity: 0}, "+=2")
// .to("#bmw-top-right",{duration:.5, xPercent:200, opacity: 0}, "-=0.5")
// .to("#bmw-bottom-right",{duration:.5, yPercent:200, opacity: 0}, "-=0.5")
// .to("#bmw-bottom-left",{duration:.5, xPercent:-200, opacity: 0}, "-=0.5")
// .to("#circle", {drawSVG:"true", duration: 1})
       

export function lineAnimation(){

        return lineTL;
}


const outlineRmpTL = gsap.timeline();
outlineRmpTL.fromTo(".outlines-line-1",{drawSVG:"0%"}, {duration: 2, drawSVG:"30% 31%"})
.fromTo(".outlines-line-2",{drawSVG:"0%"}, {duration: 2.1, drawSVG:"30% 33%"}, "-=1.85")
.fromTo(".outlines-line-3",{drawSVG:"0%"}, {duration: 2.1, drawSVG:"30% 35%"}, "-=1.85")
.fromTo(".draw-outlines-1",{drawSVG:"0%"}, {duration: 2, drawSVG:"30%"}, "-=2.1")

export function outlineRmpAnimation(){

        return outlineRmpTL;
}

const outlineSpeedTL = gsap.timeline();
outlineSpeedTL.fromTo(".outlines-line-2-1",{drawSVG:"40% 50%"}, {duration: 2, drawSVG:"99.9% 100%"})
.fromTo(".outlines-line-2-2",{drawSVG:"40% 50%"}, {duration: 2, drawSVG:"99.8% 100%"}, "-=1.8")
.fromTo(".outlines-line-2-3",{drawSVG:"40% 50%"}, {duration: 2, drawSVG:"99.7% 100%"}, "-=1.8")
.fromTo(".draw-outlines-2",{drawSVG:"40% 50%"}, {duration: 2, drawSVG:"40% 100%"}, "-=1.9")

export function outlineSpeedAnimation(){

        return outlineSpeedTL;
}

const topLogoTL = gsap.timeline();
topLogoTL.from("#line-logo",{duration: 2, drawSVG:"0%"}, "outlineTime")
.from("#logo-top-left",{duration:2, rotate: 360, opacity: 0}, "outlineTime")
.from("#logo-top-right",{duration:2, rotate: 360, opacity: 0}, "outlineTime")
.from("#logo-bottom-right",{duration:2, rotate: 0, opacity: 0}, "outlineTime")
.from("#logo-bottom-left",{duration:2, rotate: 0, opacity: 0}, "outlineTime")
.from(".type-logo-series",{duration:2, yPercent:-200, opacity: 0}, "outlineTime")

export function topLogoAnimation(){

        return topLogoTL;
}