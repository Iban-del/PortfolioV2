
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
        <nav className=" w-full h-25 bg-black/50 blu" >

        </nav>
    )
}

export default Nav;