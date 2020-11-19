import {gsap} from "gsap";

const speedTL = gsap.timeline();
speedTL
.from("#speed-dashes-1",{duration: 1.5, x:1}, "-=1")
.from("#speed-dashes-2",{duration: 2, x:1}, "-=1.5")
.to("#speed-rectangle",{duration: 1, yPercent: -15, alpha: 1}, "numbersspeedTime")
        .from("#speed-numbers",{duration: 1, alpha: 0}, "numbersspeedTime")
        // .from("#speed-dashes-1",{duration: .5, x:-5}, "speedTime")
        // .from("#speed-dashes-2",{duration: .5, x:-5}, "speedTime")
        .from("#speed-number",{duration: 1, alpha: 0}, "numbersspeedTime")
        .from("#mph",{duration: 1, alpha: 0}, "numbersspeedTime")


export function speedAnimation(){

        return speedTL;
}