import { useMemo, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useGSAP } from '@gsap/react';




export interface NavProps {
    icon?: React.ReactNode
    links?: { name: string; href: string }[]
}

const Nav = ({
    icon,
    links
}:NavProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const nav = useRef<HTMLElement>(null);
    const mobileMenu = useRef<HTMLDivElement>(null);
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
        setIsOpen(!isOpen);
        if(!isOpen){
            gsap.fromTo(
                mobileMenu.current, 
                { opacity: 0}, 
                { opacity: 1, duration: 0.5, ease: "power2.out",display: "flex"}
            );
        }else{
            gsap.fromTo(
                mobileMenu.current, 
                { opacity: 1}, 
                { opacity: 0, duration: 0.5, ease: "power2.in",display: "none"}
            );
        }
    });

    return (
        <nav  ref={nav} className="bg-foreground/10 backdrop-blur-sm p-4 h-25 flex items-center justify-between">
            <div>
                {icon}
            </div>
            <div className="gap-4 md:flex hidden">
                {LinksNode}
            </div>
            <div className="md:hidden flex">
                <button onClick={toggleHamburgerClick} className="text-black hover:text-primary transition-colors duration-300">
                    { isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
            </div>
            <div 
                ref={mobileMenu}
                className="absolute top-16 left-0 w-full bg-foreground p-4 flex flex-col gap-4 "
            >
                {LinksNode}
            </div>
        
        </nav>
    )
}

export default Nav