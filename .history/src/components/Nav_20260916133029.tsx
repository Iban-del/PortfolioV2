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
            <div className="flex gap-4 md:visible m">
                {LinksNode}
            </div>
            <div className="md:invisible visible">
                <button className="text-black hover:text-primary transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}

export default Nav