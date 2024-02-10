import Logo from '../assets/images/Logo-removebg.png';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className="flex justify-between items-center h-16 bg-white shadow">
        <NavLink to="/">
            <img src={Logo} alt="logo" className="h-10 pl-4" />
        </NavLink>
        <div className="flex items-center pr-4 gap-x-10 font-bold">
            <NavLink to="/login" className='text-blue-700 border-2 border-blue-700 rounded-3xl px-4 py-2'>Login</NavLink>
            <NavLink to="/signup" className='text-white bg-blue-700 rounded-3xl px-4 py-2'>Signup</NavLink>
        </div>

        </nav>
    );
    }
export default NavBar;
