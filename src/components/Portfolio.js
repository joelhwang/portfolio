import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import Footer from './Footer';
import Contact from './Contact';
import totopicon from '../images/totopicon.jpg'
import Home from './Home';
import { Link } from 'react-scroll';

const Portfolio = () => {

    const handleScroll = () =>{
        window.scrollTo(0, 0);
    }

    return ( 
        <div>
            <div className='body'>
                <Home/>
                <div id = 'about-component'><About/></div>
                <div id ='skills-component'><Skills/></div>
                <div id = 'projects-component'><Projects/></div>
                <div id = 'contact-component'><Contact/></div>
                <Link to='about-component' spy={true} smooth={true}>
                    <img className='scroll-top' src={totopicon}/>
                </Link>
            </div>
            <Footer/>
        </div>
     );
}
 
export default Portfolio;