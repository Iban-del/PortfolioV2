import { useMemo, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMoon, AiOutlineSun } from "react-icons/ai";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";




export interface NavProps {
    links?: { name: string; href: string }[]
}

const Nav = ({
    links
}:NavProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const nav = useRef<HTMLElement>(null);
    const mobileMenu = useRef<HTMLDivElement>(null);
    const background = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP(()=>{

    },{scope: nav});


    const LinksNode = useMemo(()=>{
        return links?.map((link, index) => {
            return (
                <a 
                    key={index + '-nav-link'} 
                    href={link.href} 
                    className="text-black hover:text-primary transition-colors duration-300"
                >
                    {link.name}
                </a>
            )
        })
    },[links]);

    
    const toggleHamburgerClick = contextSafe(() => {
    
        if(!isOpen){
            gsap.fromTo(
                mobileMenu.current, 
                {y: -100, opacity: 0}, 
                {y: 0, opacity: 1, duration: 0.5, ease: "power2.out",display: "flex"}
            );
            gsap.fromTo(
                background.current, 
                {height:"6.25rem"}, 
                {height:"100vh", duration: 0.5, ease: "power2.out"}
            );
        }else{
            gsap.fromTo(
                mobileMenu.current, 
                {y: 0, opacity: 1}, 
                { y: -100, opacity: 0, duration: 0.5, ease: "power2.in",display: "none"}
            );
            gsap.fromTo(
                background.current, 
                {height:"100vh"}, 
                {height:"6.25rem", duration: 0.5, ease: "power2.in"}
            );
        }
        setIsOpen(!isOpen);
    });

    return (
        <>
        
            <div  ref={background} className="w-screen h-25 fixed blur-md backdrop-blur-sm"></div>
            <nav  ref={nav} className="bg-transparentc fixed w-screen backdrop-blur-sm p-4 h-25 flex items-center justify-between text-foreground">
                <div>
                    <ToggleThemeButton />
                </div>
                <div className="gap-4 md:flex hidden">
                    {LinksNode}
                </div>
                <div className="md:hidden flex">
                    <button onClick={toggleHamburgerClick} className="text-foreground hover:text-primary transition-colors duration-300">
                        { isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </button>
                </div>
                <div 
                    ref={mobileMenu}
                    className="absolute top-16 left-0 w-full bg-transparent p-4 hidden flex-col gap-4 "
                >
                    {LinksNode}
                </div>
            </nav>
        </>
    )
}

const ToggleThemeButton = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const toggleTheme = () => {
        if(theme === "light"){
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }else{
            setTheme("light");
            document.documentElement.classList.remove("dark");
        }
    }
    
    return (
        <button onClick={toggleTheme} className="text-black hover:text-primary transition-colors duration-300">
            { theme === "light" ? <AiOutlineMoon /> : <AiOutlineSun /> }
        </button>
    )
}

export default Nav