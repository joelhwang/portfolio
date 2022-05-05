import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import Footer from './Footer';
import Contact from './Contact';
import totopicon from '../images/totopicon.jpg'

const Portfolio = () => {

    const handleScroll = () =>{
        window.scrollTo(0, 0);
    }

    return ( 
        <div>
            <div className='body'>
                <About/>
                <Skills/>
                <Projects/>
                <Contact/>
                <img className='scroll-top' src={totopicon} onClick={handleScroll}/>

            </div>
            <Footer/>
        </div>
     );
}
 
export default Portfolio;