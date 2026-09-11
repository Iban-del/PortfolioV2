
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



    return (
        <nav className="w-screen h-15">
            
        </nav>
    )
}