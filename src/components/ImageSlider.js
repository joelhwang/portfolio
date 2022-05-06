import { useState, useEffect } from 'react'

const ImageSlider = ({imageArr, numImages}) => {
    
    const [currentImg, setCurrentImg] = useState(imageArr[0]);
    const [counter, setCounter] = useState(0);

    useEffect(() =>{
        iterateImg();
    }, [counter]);
    
    const handleClick = (direction) => {
        if(direction === 1 && counter < numImages){
            console.log('next');
            setCounter(counter+1)
            return;
        }
        if(direction === -1 && counter >0){
            console.log(counter)
            console.log('prev')
            setCounter(counter-1)
            return;
        }
        
    }

    const iterateImg = () =>{
        console.log(counter);
        setCurrentImg(imageArr[counter]);
    }

    //to implement in the future: dots on bottom of image slider for another indication of currently viewed image
    // const renderDots = () =>{
        
    //     for(let i=1;i<=numImages+1;i++){
    //         imageList.push(<span
    //             className = 'image-num' 
    //             key = {i}
    //             onClick = {()=>{
    //                 setCounter(i-1);
    //             }}
    //             >&#8226;</span>)
    //     }
    //     return imageList;
    // }

    return ( 
        <div className='slider-container'>
            <img src={currentImg} alt="artist display image" />
            <p className='currentView'>Image {counter+1} of {numImages+1}</p>
            {counter > 0 &&(
                <button className='prev' onClick={()=>handleClick(-1)}>&#8249;</button>
            )}
            {counter < numImages &&(
                <button className='next' onClick={()=>handleClick(1)}>&#x203A;</button>
            )}
            {/* <section className = 'my-pagination'>
                {renderDots()}
            </section> */}
        </div>
     );
}
 
export default ImageSlider;