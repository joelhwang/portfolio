import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    const aboutLink = () =>{
        navigate('/portfolio')
    }

    return ( 
        <div class = 'welcome-text'>
            <p className='p1'>Hello, I'm <span>Joel</span></p>
            <p className='p2'>Welcome to my Portfolio</p>
            <p className = 'about-container'>
                <p className='about-link' onClick={aboutLink}>About Me</p>
            </p>
        </div>
     );
}
 
export default Home;