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
            <section>
                <img src={htmlLogo}/>
                <p>HTML</p>
            </section>
            <section>
                <img src={cssLogo}/>
                <p>CSS</p>
            </section>
            <section>
                <img src={javascriptLogo}/>
                <p>JavaScript</p>
            </section>
            <section>
                <img src={reactLogo} />
                <p>React</p>
            </section>
            <section>
                <img src={mongodbLogo}/>
                <p>MongoDB</p>
            </section>
            <section>
                <img src={nodeLogo}/>
                <p>Node.js</p>
            </section>
            <section>
                <img src={expressLogo} />
                <p>Express.js</p>
            </section>
        </section>
    </div> );
}
 
export default Skills;