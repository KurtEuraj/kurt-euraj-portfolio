import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import blur1 from "../../assets/images/Elipse1.png"
import blur2 from "../../assets/images/Elipse2.png"
import "./BlurryCircle.scss"
import { useEffect } from "react";

function BlurryCircle() {

    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const tl = gsap.timeline();

    const { contextSafe } = useGSAP(() => {
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

    useEffect(() => {
        const followCursor = contextSafe((e) => {
            gsap.to(".blurry-circle", {
                x: e.clientX,
                y: e.clientY,
                duration: 5,
                ease: "back.out(4)",
            })
        })
        window.addEventListener("mousemove", followCursor)
        return () => {
            window.removeEventListener('mousemove', followCursor);
        }
    }, [contextSafe])

    return (
        <>
            <div className="blurry-circle">
                <img className="blurry-circle__item-1" src={blur1} alt="blurry circle animation" />
                <img className="blurry-circle__item-2" src={blur2} alt="blurry circle animation" />
            </div>
        </>
    )
}

export default BlurryCircle