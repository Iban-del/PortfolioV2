
export interface NavLink{
    anchor  :string,
    name    :string,
}

export interface NavProps{
    navLinks : NavLink[]
}

const Nav = ({
    
}:NavProps) => {

    return(
        <nav>
        </nav>
    )
}

export default Nav;