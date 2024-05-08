import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import blur1 from "../../assets/images/Elipse1.png"
import blur2 from "../../assets/images/Elipse2.png"
import "./BlurryCircle.scss"

function BlurryCircle() {

    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const tl = gsap.timeline();

    useGSAP(() => {
        tl.to(".blurry-circle", {
            duration: 3,
            y: `random(${-window.innerHeight + window.innerHeight/1.5}, ${window.innerHeight - window.innerHeight/1.5})`,
            x: `random(${-window.innerWidth + window.innerWidth/1.5}, ${window.innerWidth - window.innerWidth/1.5})`,
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
            rotate: "random(90deg, 360deg)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            repeatRefresh: true
        }, 0)
        tl.to(".blurry-circle__item-2", {
            duration: 4,
            y: "random(-100vh, 100vh)",
            x: "random(-100vw, 100vw)",
            scale: "random(1%, 2.5%)",
            rotate: "random(0deg, 360deg)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            repeatRefresh: true
        }, 0)
    }, {})

    return (
        <>
            <div className="blurry-circle">
                <img className="blurry-circle__item-1" src={blur1} alt="blurry circle animation"/>
                <img className="blurry-circle__item-2" src={blur2} alt="blurry circle animation"/>
            </div>
        </>
    )
}

export default BlurryCircle