
export type NavType = "button" | "icon" 

export interface NavbarElement {
    type : NavType,
    text : string,
    href : string
    
}

export interface NavbarProps {
    elements : NavbarElement[]
}

const Navbar = ({
    elements
}:NavbarProps) => {


    const buttons = elements.filter((el)=>{
        return el.type == "button";
    })

    const icon = elements.filter((el)=>{
        return el.type == "button";
    })

    return (
        <nav className="w-screen h-15 fixed ">
            {

            }
        </nav>
    )
}