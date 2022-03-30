import { useState } from 'react';
import { ImagesData } from './ImagesData';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // คลิกเลื่อนรูป
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <img src='./Images/arrow-left-color.png' className='s-select left-arrow' onClick={prevSlide} alt='left' />
      
      {ImagesData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='activity' className='image' />
            )}
          </div>
        );
      })}

    <img src='./Images/arrow-right-color.png' className='s-select right-arrow' onClick={nextSlide} alt='right' />
    </section>
  );
};

export default ImageSlider;
