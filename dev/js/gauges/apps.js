// import {gsap} from "gsap";

// const appTL = gsap.timeline();
// appTL.from("#app-background",{duration: .1, alpha: 0})
// .from("#app-background",{duration: 1.5, x:100})
// .to("#music-solid",{duration: 1.5, scale: 1.6, fill: "#FE0000"})

// export function appAnimation(){

//         return appTL;
    
// }

import {gsap} from "gsap";

const appTL = gsap.timeline();
appTL
// .to("#music-solid",{duration: 1.1, fill: "#FE0000"})
.to("#music-solid",{duration: 1.5, scale:1.2, fill: "#009ADA" })


// .to("#music-solid",{duration: .9, scale: 1.6, fill: "#FE0000"})
// .to("#music-solid",{duration: .9, scale: 1.6, fill: "#FE0000"})

export function appAnimation(){

        return appTL;
    
}

gsap.set("#music-solid",{transformOrigin: "center"});