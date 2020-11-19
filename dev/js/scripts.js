import {gsap} from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import {GSDevTools} from "gsap/GSDevTools";
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(GSDevTools);


import {speedAnimation} from "./gauges/speed.js";

import {lineAnimation, outlineRmpAnimation, topLogoAnimation, outlineSpeedAnimation} from "./intro.js";


//instantiate GSDevTools with default settings
GSDevTools.create();

const mainTL = gsap.timeline();

mainTL.add(lineAnimation())
        .add(outlineRmpAnimation(), "outLinesAndTopLogos")
        .add(topLogoAnimation(), "outLinesAndTopLogos")
        .add(outlineSpeedAnimation(), "outLinesAndTopLogos")
        .add(speedAnimation(), "-=2")
        ;



