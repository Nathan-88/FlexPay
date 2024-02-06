import Logo from '../assets/images/Logo-removebg.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="flex justify-between items-center h-16 bg-white shadow">
        <Link to="/">
            <img src={Logo} alt="logo" className="h-10 pl-4" />
        </Link>
        <div className="flex items-center pr-4 gap-x-10 font-bold">
            <Link to="/contact" className=''>CONTACT US</Link>
            <p className=''>COPYRIGHT</p>
        </div>

        </footer>
    );
    }
export default Footer;