import { Link } from 'react-scroll';

const Navbar = () => {
    return ( 
        <nav className = 'navbar'>
            <Link to='about-component' spy={true} smooth={true}><p>About</p></Link>
            <Link to='skills-component' spy={true} smooth={true}><p>Skills</p></Link>
            <Link to='projects-component' spy={true} smooth={true}><p>Projects</p></Link>
            <Link to='contact-component' spy={true} smooth={true}><p>Contact</p></Link>
        </nav>
     );
}
 
export default Navbar;