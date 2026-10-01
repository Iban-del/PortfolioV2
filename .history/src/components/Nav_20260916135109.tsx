import { useMemo, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";




export interface NavProps {
    icon?: React.ReactNode
    links?: { name: string; href: string }[]
}

const Nav = ({
    icon,
    links
}:NavProps) => {

    const [isOpen, setIsOpen] = useState(false);

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

    
    const onHamburgerClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="bg-foreground/10 backdrop-blur-sm p-4 h-25 flex items-center justify-between">
            <div>
                {icon}
            </div>
            <div className="gap-4 md:flex hidden">
                {LinksNode}
            </div>
            <div className="md:hidden flex">
                <button onClick={onHamburgerClick} className="text-black hover:text-primary transition-colors duration-300">
                    { isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
            </div>
            {isOpen && (
                <div 
                    className="absolute top-16 left-0 w-full bg-foreground backdrop-blur-sm p-4 flex flex-col gap-4 md:none"
                >
                    {LinksNode}
                </div>
            )}
        </nav>
    )
}

export default Nav