import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TITLE = "Iban";

const Home = () => {

    const {contextSafe} = useGSAP(()=>{
        gsap.fr
    })

    return (
        <section className="flex flex-col items-center justify-center min-h-screen py-2 " id="home">
            <h1 className="text-4xl font-bold text-primary">{TITLE}</h1>
        </section>
    )
}

export default Home