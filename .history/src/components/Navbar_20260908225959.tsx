import { useMemo, type JSX } from "react"

export type NavType = "button" | "icon" 

export interface NavbarElement {
    type : NavType,
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
        elements.filter((el)=>{
            return el.type == "button";
        })
    },[]);

    const icon = elements.filter((el)=>{
        return el.type == "button";
    })

     

    return (
        <nav className="w-screen h-20 fixed bg-purple-9">
            
        </nav>
    )
}

export default Navbar;