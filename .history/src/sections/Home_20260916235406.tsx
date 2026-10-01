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

    const section = useRef<HTMLDivElement>(null);

    const {contextSafe} = useGSAP(()=>{
        g
    })

    return (
        <section ref={section} className="flex flex-col items-center justify-center min-h-screen py-2 " id="home">
            <h1 className="text-4xl font-bold text-primary">{TITLE}</h1>
        </section>
    )
}

export default Home