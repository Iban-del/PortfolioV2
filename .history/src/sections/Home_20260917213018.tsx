import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const FIRST_NAME = "Iban";
const LAST_NAME = "DELETOILLE-ELIZADE";

export interface HomeProps {
    homeSection: React.RefObject<HTMLElement | null>;
    nav: React.RefObject<HTMLElement | null>;
}

// Découpe un texte en spans individuels pour pouvoir animer lettre par lettre
const splitToSpans = (text: string) =>
    text.split("").map((char, i) => (
        <span key={i} className="inline-block will-change-transform">
            {char === " " ? "\u00A0" : char}
        </span>
    ));

const Home = ({ homeSection, nav }: HomeProps) => {
    const leftSection = useRef<HTMLDivElement | null>(null);
    const rightSection = useRef<HTMLDivElement | null>(null);
    const portal = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const leftLetters = gsap.utils.toArray<HTMLElement>(".home-left span");
            const rightLetters = gsap.utils.toArray<HTMLElement>(".home-right span");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: homeSection.current,
                    start: "top top",
                    end: "+=1200",
                    scrub: 1,
                    pin: true,
                },
            });

            tl.to(nav.current, { autoAlpha: 0, y: -20, duration: 0.3, ease: "power2.out" }, 0)
                .to(
                    leftLetters,
                    {
                        x: -600,
                        rotate: -15,
                        filter: "blur(6px)",
                        autoAlpha: 0,
                        stagger: 0.02,
                        ease: "power2.in",
                        duration: 1,
                    },
                    0
                )
                .to(
                    rightLetters,
                    {
                        x: 600,
                        rotate: 15,
                        filter: "blur(6px)",
                        autoAlpha: 0,
                        stagger: 0.02,
                        ease: "power2.in",
                        duration: 1,
                    },
                    0
                )
                .to(
                    portal.current,
                    {
                        clipPath: "circle(75% at 50% 50%)",
                        ease: "power2.inOut",
                        duration: 1,
                    },
                    0.1
                );
        }, homeSection);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={homeSection as React.RefObject<HTMLElement>}
            id="home"
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_theme(colors.mauve.500/25%),_transparent_65%)]" />

            <div
                ref={leftSection}
                className="home-left flex w-1/2 items-center justify-end pr-4 text-6xl font-semibold tracking-tight text-foreground md:text-8xl"
            >
                {splitToSpans(FIRST_NAME)}
            </div>

            <div
                ref={portal}
                className="absolute left-1/2 top-1/2 h-[120vmax] w-[120vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mauve-500"
                style={{ clipPath: "circle(0% at 50% 50%)" }}
            />

            <div
                ref={rightSection}
                className="home-right flex w-1/2 items-center justify-start pl-4 text-6xl font-semibold tracking-tight text-foreground md:text-8xl"
            >
                {splitToSpans(LAST_NAME)}
            </div>
        </section>
    );
};

export default Home;