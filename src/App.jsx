import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import 'swiper/css/bundle';
import 'swiper/css/mousewheel';
// import 'swiper/css/scrollbar';



// import required modules
import { Mousewheel, Pagination,Scrollbar } from 'swiper/modules';

function App() {


  return (
    <>
    <section className=' border-2'>
      <Swiper
        direction={'vertical'}
        slidesPerView={1.5}
        spaceBetween={50}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination, Scrollbar]}
        className=" border-2 h-[500px]"
      >
        <SwiperSlide className='my-1 p-1 border-2 border-black'>Slide 1</SwiperSlide>
        <SwiperSlide className='my-1 p-1 border-2 border-black'>Slide 2</SwiperSlide>
        <SwiperSlide className='my-1 p-1 border-2 border-black'>Slide 3</SwiperSlide>
        <SwiperSlide className='my-1 p-1 border-2 border-black'>Slide 4</SwiperSlide>
        <SwiperSlide className='my-1 p-1 border-2 border-black'>Slide 5</SwiperSlide>
        <SwiperSlide className='my-1 p-1 border-2 border-black'>Slide 6</SwiperSlide>
        <SwiperSlide className='my-1 p-1 border-2 border-black'>Slide 7</SwiperSlide>
        <SwiperSlide className='my-1 p-1 border-2 border-black'>Slide 8</SwiperSlide>
        <SwiperSlide className='my-1 p-1 border-2 border-black'>Slide 9</SwiperSlide>
      </Swiper>
      </section>
    </>
  )
}

export default App
