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
    const {contextSafe} = useGSAP(()=>{
        gsap.to(homeSection, {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: nav.current,
                onLeave: () => {
                    gsap.to(homeSection.current, {
                        opacity: 0,
                        duration: 1,
                        ease: "power2.out"
                    })
                },
                onEnterBack: () => {
                    gsap.to(homeSection.current, {
                        opacity: 1,
                        duration: 1,
                        ease: "power2.out"
                    })
                }
            }
        })  
    })

    return (
        <section ref={homeSection} className="flex flex-col items-center justify-center min-h-screen py-2 " id="home">
            <h1 className="text-4xl font-bold text-primary">{TITLE}</h1>
        </section>
    )
}

export default Home