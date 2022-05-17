import htmlLogo from '../images/htmllogo.png' 
import cssLogo from '../images/csslogo.png'
import javascriptLogo from '../images/javascriptlogo.png'
import mongodbLogo from '../images/mongodblogo.png'
import nodeLogo from '../images/nodelogo.png'
import expressLogo from '../images/expresslogo.png'
import reactLogo from '../images/reactlogo.png'

const Skills = () => {
    return ( 
    <div className='container'>
        <h1>Skills</h1>
        <hr />
        <section className='logos'>
            <img src={htmlLogo} alt='HTML' title='HTML'/>
            <img src={cssLogo} alt='CSS' title='CSS'/>
            <img src={javascriptLogo} alt='JavaScript' title='JavaScript'/>
            <img src={reactLogo} alt='React' title='React'/>
            <img src={mongodbLogo} alt='MongoDB' title='MongoDB'/>
            <img src={nodeLogo} alt='Node.js' title='Node.js'/>
            <img src={expressLogo} alt='Express.js' title='Express.js'/>
        </section>
    </div> );
}
 
export default Skills;