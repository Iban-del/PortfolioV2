import { useMemo } from "react";




export interface NavProps {
    icon?: React.ReactNode
    links?: { name: string; href: string }[]
}

const Nav = ({
    icon,
    links
}:NavProps) => {


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

    return (
        <nav className="bg-foreground/10 backdrop-blur-sm p-4 h-25 flex items-center justify-between">
            <div>
                {icon}
            </div>
            <div className="flex gap-4 md:hidden">
                {LinksNode}
            </div>
        </nav>
    )
}

export default Nav