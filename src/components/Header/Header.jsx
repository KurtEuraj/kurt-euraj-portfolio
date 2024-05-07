import { useState } from "react"
import "./Header.scss"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom"

function Header() {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const tl = gsap.timeline();

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen)
    }

    const { contextSafe } = useGSAP(() => {
    }, {})

    const clickMobileNav = contextSafe(() => {
        toggleMobileNav()
        if (!isMobileNavOpen) {
            tl.to(".nav-bar__mobile-icon-stroke--top", {
                duration: 0.1,
                y: "0.4rem"
            })
            tl.to(".nav-bar__mobile-icon-stroke--middle", {
                duration: 0.1,
                opacity: 0,
            }, 0)
            tl.to(".nav-bar__mobile-icon-stroke--bottom", {
                duration: 0.1,
                y: "-0.4rem"
            }, 0)
            tl.to(".nav-bar__mobile-icon-stroke--top", {
                duration: 0.1,
                rotate: 45,
            })
            tl.to(".nav-bar__mobile-icon-stroke--bottom", {
                duration: 0.1,
                rotate: -45,
            }, "-=0.1")
            tl.fromTo(".nav-bar__mobile-wrapper", {
                opacity: 0,
                y: "-100vh",
            }, {
                duration: 0.25,
                opacity: 1,
                y: 0,
            }, 0)
        }
        else if (isMobileNavOpen) {
            tl.to(".nav-bar__mobile-icon-stroke--top", {
                duration: 0.1,
                rotate: 0,
            })
            tl.to(".nav-bar__mobile-icon-stroke--bottom", {
                duration: 0.1,
                rotate: 0,
            }, "-=0.1")
            tl.to(".nav-bar__mobile-icon-stroke--top", {
                duration: 0.1,
                y: "0"
            })
            tl.to(".nav-bar__mobile-icon-stroke--middle", {
                duration: 0.1,
                opacity: 1,
            }, "-=0.1")
            tl.to(".nav-bar__mobile-icon-stroke--bottom", {
                duration: 0.1,
                y: "0"
            }, "-=0.1")
            tl.to(".nav-bar__mobile-wrapper", {
                duration: 0.4,
                opacity: 0,
                y: "-100vh",
            }, 0)
        }
    });



    return (
        <header className="nav-bar">
            <nav className="nav-bar__wrapper">
                <div className="nav-bar__mobile">
                    <div className={isMobileNavOpen ? "nav-bar__mobile-icon nav-bar__mobile-icon--open" : "nav-bar__mobile-icon nav-bar__mobile-icon--closed"} onClick={clickMobileNav}>
                        <div className="nav-bar__mobile-icon-stroke nav-bar__mobile-icon-stroke--top"></div>
                        <div className="nav-bar__mobile-icon-stroke nav-bar__mobile-icon-stroke--middle"></div>
                        <div className="nav-bar__mobile-icon-stroke nav-bar__mobile-icon-stroke--bottom"></div>
                    </div>
                    <div className="nav-bar__mobile-wrapper">
                        <div className="nav-bar__mobile-links-wrapper">
                            <NavLink onClick={clickMobileNav} to="/" className={({ isActive, isPending }) =>
                                isPending ? "nav-bar__mobile-link pending" : isActive ? "nav-bar__mobile-link active" : "nav-bar__mobile-link"
                            }>
                                Home
                            </NavLink>
                            <NavLink onClick={clickMobileNav} to="/about" className={({ isActive, isPending }) =>
                                isPending ? "nav-bar__mobile-link pending" : isActive ? "nav-bar__mobile-link active" : "nav-bar__mobile-link"
                            }>
                                About Me
                            </NavLink>
                            <NavLink onClick={clickMobileNav} to="/projects" className={({ isActive, isPending }) =>
                                isPending ? "nav-bar__mobile-link pending" : isActive ? "nav-bar__mobile-link active" : "nav-bar__mobile-link"
                            }>
                                Projects
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header