
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
        <nav className=" w-full h-" >

        </nav>
    )
}

export default Nav;