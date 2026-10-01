import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const TITLE = "Iban";

export interface HomeProps {
    homeSection: React.RefObject<HTMLElement|null>
    nav: React.RefObject<HTMLElement|null>
}

const Home = ({
    homeSection,
    nav
}:HomeProps) => {
    useGSAP(()=>{
        gsap.to(homeSection, {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: nav.current,
                markers: true,
                onLeave: () => {
                    gsap.to(nav.current, {
                        opacity: 0,
                        duration: 1,
                        ease: "power2.out",
                        display: "none"
                    })
                },
                onEnterBack: () => {
                    gsap.to(nav.current, {
                        opacity: 1,
                        duration: 1,
                        ease: "power2.out",
                        display: "flex"
                    })
                }
            }
        })  
    })

    return (
        <section ref={homeSection} className="flex flex-col items-center justify-center min-h-screen py-2 " id="home">
            <div className="w-1/2 h-">
                <h1 className="text-6xl font-bold text-center">{TITLE}</h1>
            </div>
            <div>

            </div>
        </section>
    )
}

export default Home