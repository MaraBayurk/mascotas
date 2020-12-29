import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to="/" >Home</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}