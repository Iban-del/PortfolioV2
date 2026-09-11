import { useMemo, type JSX } from "react"


export interface NavbarElement {
    text : string,
    href : string
    icon: JSX.Element
}

export interface NavbarProps {
    elements : NavbarElement[]
}

const Navbar = ({
    elements
}:NavbarProps) => {


    const buttons = useMemo(()=>{
        const list : JSX.Element[] = []
        elements.forEach(()=>{
            li(
                <a href="">
                    
                </a>
            )
        });
        return list;
    },[]);

    

    return (
        <nav className="w-screen h-20 fixed bg-purple-9">
            <div className="sm:hidden ">

            </div>
            <div className="">
                
            </div>
        </nav>
    )
}

export default Navbar;