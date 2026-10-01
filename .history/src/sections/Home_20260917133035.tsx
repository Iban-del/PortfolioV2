import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const TITLE = "Iban";

export interface HomeProps {
    homeSection: React.RefObject<HTMLElement | null>
    nav: React.RefObject<HTMLElement | null>
}

const Home = ({
    homeSection,
    nav
}: HomeProps) => {

    const rightSection = useRef<HTMLDivElement | null>(null)
    const leftSection = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: homeSection.current,
                    start: "top top",
                    end: "+=1500",
                    scrub: 1,
                    pin: true,
                }
            })

            timeline.to(homeSection, {
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: nav.current,
                    onLeave: () => {
                        gsap.to(nav.current, {
                            opacity: 0,
                            duration: 1,
                            ease: "power2.out",
                            display: "none"
                        })
                        gsap.to(leftSection.current, {
                            x: -100,
                            duration: 0.5,
                            ease: "power2.out",
                        })
                        gsap.to(rightSection.current, {
                            x: 100,
                            duration: 0.5,
                            ease: "power2.out",
                        })
                    },
                    onEnterBack: () => {
                        gsap.to(nav.current, {
                            opacity: 1,
                            duration: 1,
                            display: "flex"
                        })
                        gsap.to(leftSection.current, {
                            x: 0,
                            duration: 0.5,
                            ease: "power2.out",
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                        })
                        gsap.to(rightSection.current, {
                            x: 0,
                            duration: 0.5,
                            ease: "power2.out",
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                        })
                    }
                }
            })
        })
        return () => ctx.revert();
    })

    return (
        <section ref={homeSection} className="flex min-h-screen " id="home">
            <div ref={leftSection} className="w-1/2 bg-primary flex items-center justify-center  ">
                <h1 className="text-6xl font-bold text-center">{TITLE}</h1>
            </div>
            <div ref={rightSection} className="w-1/2 bg-primary flex items-center justify-center  ">
                <p className="text-2xl text-center">Welcome to my portfolio</p>
            </div>
        </section>
    )
}

export default Home