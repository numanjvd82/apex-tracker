import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Icon from '../Icon';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-container">
      <Link to="/">
        <h3 className="logo-text">Tracker Mania</h3>
      </Link>
      <Icon className="nav-icon" icon={<BsGithub size={30} color="white" />} />
    </nav>
  );
};

export default Navbar;
