
export interface NavLink{
    anchor  :string,
    name    :string,
}

export interface NavProps{
    navLinks : NavLink[]
}

const Nav = ({
    navLinks
}:NavProps) => {

    return(
        <nav className=" w-full h-25 bg-black/50 blur-3xl bg-amber-50" >
            js
        </nav>
    )
}

export default Nav;