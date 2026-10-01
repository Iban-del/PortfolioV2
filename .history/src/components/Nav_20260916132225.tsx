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

    },[links]);

    return (
        <nav className="bg-foreground/20 blur-lg backdrop-blur-sm p-4 h-25">
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