import {gsap} from "gsap";

const speedTL = gsap.timeline();
speedTL
.from(".speed-dashes-1",{duration: 1.5, x:-100}, "dashes")
.from(".rpm-dash",{duration: 1.5, x:100}, "dashes")
.from(".speed-dashes-2",{duration: 1.5, x:-100}, "-=1")
.to("#speed-rectangle",{duration: 1.5, yPercent: -15, alpha: 1}, "-=.5 numbersspeedTime")
.fromTo("#rpm-rectangle",{duration: 1.5, y:35},{duration: 1.5, y: 0, alpha: 1}, "-=.5 numbersspeedTime")
.from("#rpm-numbers",{duration: 1.5, x: 150 }, "numbersspeedTime")
        .from("#rpm",{duration: 1.5, x:70 }, "numbersspeedTime")
        .from("#speed-numbers",{duration: 1.5, x: 500 }, "numbersspeedTime")
        .from("#speed-number",{duration: 1.5, x:155 }, "numbersspeedTime")
        .from("#mph",{duration: 1.5, x:100 }, "numbersspeedTime")
        .from("#p",{duration: 1.5, x:150}, "numbersspeedTime")
        .from("#apps",{duration: 1.5, x:0}, "numbersspeedTime")
        .from("#music",{duration: 2, x:-600}, "numbersspeedTime")
        .from("#gas",{duration: 1.5, x:25}, "numbersspeedTime")
        .fromTo("#gas-measure-rectanlge",{duration: 2.5, y:160}, {duration: 2.5, y:110}, "numbersspeedTime")
        .fromTo(".cars-outline",{duration: 2.5, drawSVG:"0%"}, {duration: 2.5, drawSVG:"100%"}, "numbersspeedTime")
        .from("#background-gradient", {duration: 2.5, alpha: 0}, "numbersspeedTime")
        .from("#overlay-fade", {duration: 2.5, alpha: 0}, "numbersspeedTime")
        .from("#overlay-fade-2", {duration: 2.5, alpha: 0}, "numbersspeedTime")
        .fromTo(".map-lines",{duration: 3.5, drawSVG:"0%"}, {duration: 3.5, drawSVG:"100%"}, "numbersspeedTime")
        .from("#gps-arrow", {duration: 2, y:550, alpha: 0}, "-=2")
       

       
export function speedAnimation(){

        return speedTL;
}