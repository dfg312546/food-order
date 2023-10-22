import React, { useState } from 'react';
import './Carousel.css'
import { ImageList,ImageListItem } from '@mui/material';

const imgs = [
    'https://images.unsplash.com/photo-1620646146961-fb8c077b6b61?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1594179047519-f347310d3322?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1615996001375-c7ef13294436?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1460306855393-0410f61241c7?auto=format&fit=crop&q=80&w=2073&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const imgsData = [
  {
    img:'https://images.unsplash.com/photo-1620646146961-fb8c077b6b61?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title:'1',
    rows: 2,
    cols: 4,
  },
  {
    img:'https://images.unsplash.com/photo-1594179047519-f347310d3322?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title:'2',
    rows: 1,
    cols: 2,
  },
  {
    img:'https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title:'3',
    rows: 1,
    cols: 2,
  },
  {
    img:'https://images.unsplash.com/photo-1615996001375-c7ef13294436?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title:'4',
    rows: 1,
    cols: 4,
  },
  {
    img:'https://images.unsplash.com/photo-1460306855393-0410f61241c7?auto=format&fit=crop&q=80&w=2073&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title:'5',
    rows: 1,
    cols: 2,
  },
  {
    img:'https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title:'6',
    rows: 1,
    cols: 2,
  },
]

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? imgs.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === imgs.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
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
          <li key={index} className={`indexLi ${index === currentIndex ? 'activeIndex' : ''}`}></li>
        ))}
      </ul>
    </div>

    <div className='imageList'>
    <ImageList
      sx={{ width: '100vw', height: 'auto' }}
      variant="quilted"
      cols={4}
      rowHeight={150}
    >
      { imgsData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 1200, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      )) }
    </ImageList>
    </div>

    </>

  );
}
  

export default Carousel;