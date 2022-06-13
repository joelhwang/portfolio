import githubLogo from '../images/githublogo.png'
import linkedinLogo from '../images/linkedinlogo.png'
import totopicon from '../images/totopicon.jpg'
import { Link } from 'react-scroll';

const Footer = () => {
    return ( 
        <div className='footer'>
            <footer>
                <section className='footer-logos'>
                    <a href='https://github.com/joelhwang' target='_blank' rel='noopener noreferrer'>
                        <img src={githubLogo} />
                    </a>
                    <a href='https://www.linkedin.com/in/joel-hwang-998065200/' target='_blank' rel='noopener noreferrer'>
                        <img src={linkedinLogo} />
                    </a>
                </section>
                <p>
                    Made by Joel Hwang - Code available on <a href="https://github.com/joelhwang/portfolio" target='_blank' rel='noopener noreferrer'>GitHub</a>
                </p>
            </footer>
        </div>
     );
}
 
export default Footer;