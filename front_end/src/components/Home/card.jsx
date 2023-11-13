import image1 from '../../images/i1.jpg'
import image2 from '../../images/i2.jpg'
import image3 from '../../images/i3.jpg'
// import image4 from '../../images/i4.jpg'
// import image5 from '../../images/logo.jpg'
// import image6 from '../../images/title.jpg'
import "../../css/Home.css"
import Basecard from './basecard'
import { useState } from 'react'

const card = () => {

    const images = [
        image1,
        image2,
        image3,
        image1,
        image2,
        image3,
        image1,
        image2,
        image3,
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = (event) => {
        const imageWidth = event.target.clientWidth;
        const scrollPosition = event.target.scrollLeft;
    
        if (scrollPosition > imageWidth / 2) {
          setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
        } else {
          setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        }
      };

    return (

        <>
            <div>
                <p id="title" style={{fontFamily:"-moz-initial",background:"#ededed",fontWeight:600,fontSize:'24px',alignItems:"center",paddingLeft:"45%"}}></p>
            </div>
            <div className='cointainer' onScroll={handleScroll}>
                <div>
                </div>
                <div className='card'>
                    {images.map((img,index) => (
                        <Basecard img={img} index={index}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default card;