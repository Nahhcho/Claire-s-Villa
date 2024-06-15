import React, { useState } from 'react';
import './Slideshow.css'; // Create a CSS file for styles
import slide1 from './1.jpg';
import slide2 from './2.jpg';
import slide3 from './3.jpg';
import slide4 from './4.jpg';
import slide5 from './5.jpg';
import slide6 from './6.jpg';
import slide7 from './7.jpg';
import slide8 from './8.jpg';
import slide9 from './9.jpg';
import slide10 from './10.jpg';
import { Link } from 'react-scroll';

const images = [
    slide1,
    slide2,
    slide3,
    slide6,
    slide7,
    slide8,
    slide9,
    slide10,
];

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const previousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    
    return (
        <div id='discover-section' className='grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-16 lg:px-32 bg-[#c3f2cb]'>
            <div className='flex flex-col justify-between'>
                <div>
                <header className='font-bold text-[32px] mb-[20px]'>Virtual Tour</header>
                <p className='lg:pr-32'>
                    Have a look at the facility before your visit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum laboriosam tempore velit, natus alias veniam quis modi, voluptates suscipit explicabo. Maxime hic consequatur explicabo molestiae dolor obcaecati sint animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quas tenetur perspiciatis, consequatur, dicta obcaecati ipsam perferendis, possimus tempora unde quam eligendi eveniet! Officia quos hic ea temporibus dolorem iure?
                </p>
                </div>
                <Link to='email' smooth={true} duration={500}>
                    <button className='visit-button w-[160px] mt-[20px] xl:mt-auto'>
                        Get in touch
                    </button>
                </Link>
            </div>
        <div className="slideshow">
            <div className="slideshow-images">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className={index === currentIndex ? 'active' : 'inactive'}
                    />
                ))}
            </div>
            <button onClick={previousSlide} className="slideshow-button previous">❮</button>
            <button onClick={nextSlide} className="slideshow-button next">❯</button>
        </div>
        </div>
    );
};

export default Slideshow;