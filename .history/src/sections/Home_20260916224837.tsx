import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const TITLE = "Iban";

const Home = () => {

    const section = useRef<HTMLDivElement>(null);

    const {contextSafe} = useGSAP(()=>{
        gsap.fromTo(

        )
    })

    return (
        <section className="flex flex-col items-center justify-center min-h-screen py-2 " id="home">
            <h1 className="text-4xl font-bold text-primary">{TITLE}</h1>
        </section>
    )
}

export default Home