import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./BlurryCircle.scss"

function BlurryCircle() {

    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const tl = gsap.timeline();

    useGSAP(() => {
        tl.to(".blurry-circle", {
            duration: 2,
            y: "random(-200vh, 200vh)",
            x: "random(-200vw, 200vw)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            repeatRefresh: true
        })
        tl.to(".blurry-circle__item-1", {
            duration: 3,
            y: "random(-100vh, 100vh)",
            x: "random(-100vw, 100vw)",
            scale: "random(1%, 2.5%)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            repeatRefresh: true
        }, 0)
        tl.to(".blurry-circle__item-2", {
            duration: 3,
            y: "random(-100vh, 100vh)",
            x: "random(-100vw, 100vw)",
            scale: "random(1%, 2.5%)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            repeatRefresh: true
        }, 0)
    }, {})

    return (
        <>
            <div className="blurry-circle">
                <div className="blurry-circle__item-1" ></div>
                <div className="blurry-circle__item-2" ></div>
            </div>
        </>
    )
}

export default BlurryCircle