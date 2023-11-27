import { Link } from "react-router-dom"


export const NavBar = () => {
    return (
        <nav>
            <Link to="/" className="">All</Link>
            <Link to="/?todos=active" className=""> Active</Link>
            <Link to="/?todos=completed" className="">Completed</Link>
        </nav>
    )
}
