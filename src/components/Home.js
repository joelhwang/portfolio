import { Link } from 'react-scroll';

const Home = () => {
    return ( 
        <div class = 'welcome-text'>
            <p className='p1'>Hello, I'm <span>Joel</span></p>
            <p className='p2'>Welcome to my Portfolio</p>
            <Link to='about-component' spy={true} smooth={true}>
                <p className = 'about-container'>
                    <p className='about-link'>About Me</p>
                </p>
            </Link>
        </div>
     );
}
 
export default Home;