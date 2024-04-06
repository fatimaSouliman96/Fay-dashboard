import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../style/slider.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import CardBook from '../cardBook/CardBook';
import '../style/cardBook.css'
import pdf from '../../../../assets/voice over.pdf'
import { CgClose } from 'react-icons/cg';

export default function Slider() {
  const [ stylePdf , setStylePdf ] = useState("")

  const showPdf = () => {
    setStylePdf("show-pdf")
  }
  const closePdf = () => {
    setStylePdf("")
  }
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={40}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><CardBook showPdf={showPdf} /></SwiperSlide>
        <SwiperSlide><CardBook showPdf={showPdf} /></SwiperSlide>
        <SwiperSlide><CardBook showPdf={showPdf} /></SwiperSlide>
        <SwiperSlide><CardBook showPdf={showPdf} /></SwiperSlide>
        <SwiperSlide><CardBook showPdf={showPdf} /></SwiperSlide>
        <SwiperSlide><CardBook showPdf={showPdf} /></SwiperSlide>
        <SwiperSlide><CardBook showPdf={showPdf} /></SwiperSlide>
        <SwiperSlide><CardBook showPdf={showPdf} /></SwiperSlide>
        <SwiperSlide><CardBook showPdf={showPdf} /></SwiperSlide>
        
      </Swiper>
      <div className={`${stylePdf} un-show`} >
        
        <iframe src={pdf} width="70%" height="70%" style={{padding:"1.5rem"}} />
        <CgClose size={70} style={{paddingLeft:"1rem" , paddingBottom:"3rem" , cursor:"pointer"}} onClick={ () => closePdf()} />

      </div>
    </>
  );
}


