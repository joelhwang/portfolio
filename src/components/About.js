import profilePic from '../images/profilepic.jpg'

const About = () => {
    return ( 
        <div className='container'>
            <h1>About</h1>
            <hr />
            <section className='self-intro'>
                <img src={profilePic}/>
                <p>
                    Hi, my name is Joel Hwang! I graduated from Cal Poly Pomona with a bachelor's degree in computer science and chose 
                    to pursue web development as a career. I am primarily interested in front-end development but I also enjoy creating
                    full-stack applications.
                    I delved into this particular field of programming due to the creativity that it allows. Discovering new technologies 
                    to expand on that creativity keeps me interested. 
                </p>
            </section>
        </div>
    );
}
 
export default About;