import React, { useState } from 'react';
import './Carousel.css'

const imgs = [
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
    'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
  ];

  function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? imgs.length - 1 : prevIndex - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === imgs.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className='slideshow'>
        {imgs.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`image ${index === currentIndex ? 'active' : ''}`}
            alt="輪播元件圖片"
          />
        ))}
        <button className='prevBtn' onClick={prevSlide}>&#10094;</button>
        <button className='nextBtn' onClick={nextSlide}>&#10095;</button>
        <ul className='indexUl'>
          {imgs.map((img, index) => (
            <li className={`indexLi ${index === currentIndex ? 'activeIndex' : ''}`}></li>
          ))}
        </ul>
      </div>
    );
  }
  

export default Carousel;