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
                    className="text-black"
                >
                    {link.name}
                </a>
            )
        })
    },[links]);

    return (
        <nav className="bg-foreground/20 blur-lg  p-4 h-25 flex items-center justify-between">
            <div>
                {icon}
            </div>
            <div>
                {LinksNode}
            </div>
        </nav>
    )
}

export default Nav