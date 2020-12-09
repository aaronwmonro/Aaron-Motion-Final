import {gsap} from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import {GSDevTools} from "gsap/GSDevTools";
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(GSDevTools);


// import {rpmAnimation} from "./gauges/rpm.js";

import {speedAnimation} from "./gauges/speed.js";

import {appAnimation} from "./gauges/apps.js";

import {driveAnimation, gpsAnimation} from "./driving.js";

// import {pnmdAnimation, carsAnimation} from "./gauges/pnmd.js";

import {lineAnimation, outlineRmpAnimation, topLogoAnimation, outlineSpeedAnimation} from "./intro.js";


//instantiate GSDevTools with default settings
GSDevTools.create();

const mainTL = gsap.timeline();

mainTL.add(lineAnimation())
        .add(outlineRmpAnimation(), "-=.65")
        .add(outlineSpeedAnimation(), "-=2.65")
        .add(topLogoAnimation(),"-=1.65")
        .add(speedAnimation(), "-=1.7")
        // .add(rpmAnimation(), "-=2")
        .add(appAnimation(), "-=1.6")
        .add(driveAnimation())
        .add(gpsAnimation(),"-=2.75")
        // .add(pnmdAnimation(), "-=3.1")
        // .add(carsAnimation(), "-=3.1")

        ;



