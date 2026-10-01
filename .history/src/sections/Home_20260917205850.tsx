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
    nav,
}: HomeProps) => {

    const rightSection = useRef<HTMLDivElement | null>(null)
    const leftSection = useRef<HTMLDivElement | null>(null)
    const endElement = useRef<HTMLDivElement | null>(null)

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
                            x: -500,
                            duration: 0.5,
                            ease: "power2.out",
                            rotate: 10,
                            borderRadius: "50%"
                        })
                        gsap.to(rightSection.current, {
                            x: 500,
                            duration: 0.5,
                            ease: "power2.out",
                            rotate: -10,
                            borderRadius: "50%"
                        })

                        gsap.to(endElement.current, {
                            duration:0.5,
                            ease: "power2.out",
                            borderRadius: "0%",
                            opacity: 1,
                            display: "block",
                            width: "100vh",
                            height: "100vh"
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
                            rotate: 0,
                            borderRadius: "0%"
                        })
                        
                        gsap.to(rightSection.current, {
                            x: 0,
                            duration: 0.5,
                            ease: "power2.out",
                            rotate: 0,
                            borderRadius: "0%"
                        })

                        gsap.to(endElement.current, {
                            duration:0.5,
                            ease: "power2.out",
                            borderRadius: "50%",
                            opacity: 0,
                            width: "0vh",
                            height: "0vh",
                            display: "none"
                        })
                    }
                }
            })


        })
        return () => ctx.revert();
    })

    return (
        <section ref={homeSection} className="flex min-h-screen " id="home">
            <div ref={leftSection} className="w-1/2 bg-primary flex items-center justify-end tex">
                Ib
            </div>
            <div ref={endElement} className="w-0 h-0 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div ref={rightSection} className="w-1/2 bg-primary flex items-center justify-start  ">
                an
            </div>
        </section>
    )
}

export default Home