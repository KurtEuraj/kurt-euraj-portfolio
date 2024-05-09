import "./AboutText.scss"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AboutText() {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const tl = gsap.timeline();

    useGSAP(() => {
        tl.fromTo(".about-text__heading", {
            opacity: 0,
            y: 20,
        }, {
            duration: 1,
            opacity: 1,
            y: 0,
        })

        tl.fromTo(".about-text__wrapper", {
            opacity: 0,
            y: 20,
        }, {
            duration: 1.2,
            opacity: 1,
            y: 0,
        }, 0)

        tl.fromTo(".about-text__body", {
            opacity: 0,
            y: 20
        }, {
            duration: 1,
            opacity: 1,
            y: 0,
            stagger: 0.25,
        }, "-=0.5")
    }, {})

    return (
        <div className="about-text">
            <div className="about-text__wrapper">
                <h1 className="about-text__heading">Who am I? 🤔</h1>
                <div className="about-text__body-wrapper">
                    <p className="about-text__body">
                        I'm a developer with a keen eye and a strong attention to detail. I strive to create visually appealing and functionally sound applications. Starting my development journey in 2020, driven by sheer curiosity, immediately I knew this was where I belong. My mission is to make applications that simplify tasks for everyone...and look good doing it 😉
                    </p>
                    <p className="about-text__body">
                        I've always been an artist at heart. Before transitioning to software development, my background was in music production. To this day, I still make music occasionally when i'm feeling inspired.
                    </p>
                    <p className="about-text__body">
                        Throughout my high school days, I was hugely involved in theatre. Taking on multiple lead roles and was accepted into George Brown's Acting in Media program.
                    </p>
                    <p className="about-text__body">
                        Ultimately, I love learning new things, whether it be dev related, historical facts, or even through failure. I'm always looking to improve myself or achieve some type of goal.
                    </p>
                    <p className="about-text__body">
                        In my free time, I love watching Formula 1 🏎️, doing horribly in video games 🎮, and hanging out with friends and family. Thanks for taking the time to check out my site!🙏 Feel free to connect with me on LinkedIn!😄
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutText