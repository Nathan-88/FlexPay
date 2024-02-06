import Logo from '../assets/images/whitelogo.png';
import { Link } from 'react-router-dom';
const Navbarsigin = (prop) => {
    return (
        <nav className="flex justify-between items-center h-16 bg-blue-700 shadow">
        <Link to="/">
            <img src={Logo} alt="logo" className="h-10 pl-4" />
        </Link>
        <div className="pr-4 font-bold">
            <Link to={`/${prop.link}`} className="text-white text-xl">{prop.name}</Link>
        </div>

        </nav>
    );
    }
export default Navbarsigin;