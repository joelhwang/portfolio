import ImageSlider from "./ImageSlider";
import artistdisplay1 from '../images/artistdisplay1.png'
import artistdisplay2 from '../images/artistdisplay2.png'
import artistdisplay3 from '../images/artistdisplay3.png'
import recipesearchsave1 from '../images/recipesearchsave1.png'
import recipesearchsave2 from '../images/recipesearchsave2.png'
import recipesearchsave3 from '../images/recipesearchsave3.png'
import recipesearchsave4 from '../images/recipesearchsave4.png'
import recipesearchsave5 from '../images/recipesearchsave5.png'


const Projects = () => {
    //arrays of images for image slider are hard coded
    const artistDisplayArr = [artistdisplay1, artistdisplay2, artistdisplay3];
    const recipeSearchArr = [recipesearchsave1, recipesearchsave2, recipesearchsave3, recipesearchsave4, recipesearchsave5];

    //Link to live app and github repo
    const handleLink = (url) =>{
        window.open(url);
    }

    return ( 
        <div className='container'>
            <h1>Projects</h1>
            <hr className='proj-divider'/>
            <section className='project-container'>
                <ImageSlider numImages={2} imageArr={artistDisplayArr}/>
                <section>
                    <h1>Project #1: Artist Display</h1>
                    <p>A full stack application where users can upload art to quickly create and share their portfolio.</p>
                    <p>Built with Node.js, Express.js, and MongoDB.</p>
                    <button className='project-link' onClick = {()=>{handleLink('https://artistdisplay.herokuapp.com/')}}>Visit Live App</button>
                    <button className='project-link' onClick = {()=>{handleLink('https://github.com/joelhwang/ArtistDisplay/')}}>View on GitHub</button>
                </section>
            </section>
            <hr className='proj-divider'/>
            <section className = 'project-container'>
                <ImageSlider numImages={4} imageArr={recipeSearchArr}/>
                <section>
                    <h1>Project #2: Recipe Search & Save</h1>
                    <p>A full stack application where users can find recipes given a single ingredient with filtering options.</p>
                    <p>Also includes login functionality for saving recipes to use in the future.</p>
                    <p>Built with React, Node.js, Express.js, and MongoDB.</p>
                    <button className='project-link' onClick = {()=>{handleLink('https://recipesearchsave.herokuapp.com/')}}>Visit Live App</button>
                    <button className='project-link' onClick = {()=>{handleLink('https://github.com/joelhwang/recipesearchsave/')}}>View on GitHub</button>
                </section>
            </section>

        </div>
     );
}
 
export default Projects;