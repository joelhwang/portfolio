import profilePic from '../images/profilepic.jpg'

const About = () => {
    return ( 
        <div className='container'>
            <h1>About</h1>
            <hr />
            <section className='self-intro'>
                <img src={profilePic}/>
                <p>
                    Hi, my name is Joel Hwang! I am a web-developer looking to further my skills in front-end and full-stack development.
                    I delved into this particular field of programming due to the creativity that it allows. Discovering new technologies 
                    to expand on that creativity keeps me interested. 
                </p>
            </section>
        </div>
    );
}
 
export default About;