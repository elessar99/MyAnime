import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { animeListState } from "../store/reducers/AnimeReducer/AnimeListState"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "./Css/TopAnimeList.css"
import PropTypes from "prop-types";
// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import AnimeCard from "./AnimeCard";
const TopAnimeList = ({onPageChange,nameChange,srcChange}) =>{
    return (
      <>
      <div className="aFullTopAnime">
        <div className="slider1">
      <Swiper
        freeMode={true}
        loop={true}
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[0].animeName} src={animeListState[0].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[3].animeName} src={animeListState[3].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[6].animeName} src={animeListState[6].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[8].animeName} src={animeListState[8].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[2].animeName} src={animeListState[2].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[14].animeName} src={animeListState[14].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[19].animeName} src={animeListState[19].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[3].animeName} src={animeListState[3].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[20].animeName} src={animeListState[20].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[17].animeName} src={animeListState[17].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[15].animeName} src={animeListState[15].animeSrc}/></SwiperSlide>
        
      </Swiper>
        </div>
        <div className="slider2">
      <Swiper
        freeMode={true}
        loop={true}
        slidesPerView={3}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[0].animeName} src={animeListState[0].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[3].animeName} src={animeListState[3].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[6].animeName} src={animeListState[6].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[8].animeName} src={animeListState[8].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[2].animeName} src={animeListState[2].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[14].animeName} src={animeListState[14].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[19].animeName} src={animeListState[19].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[3].animeName} src={animeListState[3].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[20].animeName} src={animeListState[20].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[17].animeName} src={animeListState[17].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[15].animeName} src={animeListState[15].animeSrc}/></SwiperSlide>
        
      </Swiper>
        </div>
        <div className="slider3">
      <Swiper
        freeMode={true}
        loop={true}
        slidesPerView={2}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, FreeMode]}
        className="mySwiper"
      >
<SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[0].animeName} src={animeListState[0].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[3].animeName} src={animeListState[3].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[6].animeName} src={animeListState[6].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[8].animeName} src={animeListState[8].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[2].animeName} src={animeListState[2].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[14].animeName} src={animeListState[14].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[19].animeName} src={animeListState[19].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[3].animeName} src={animeListState[3].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[20].animeName} src={animeListState[20].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[17].animeName} src={animeListState[17].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[15].animeName} src={animeListState[15].animeSrc}/></SwiperSlide>
        
      </Swiper>
        </div>
        <div className="slider4">
      <Swiper
        freeMode={true}
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[0].animeName} src={animeListState[0].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[3].animeName} src={animeListState[3].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[6].animeName} src={animeListState[6].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[8].animeName} src={animeListState[8].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[2].animeName} src={animeListState[2].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[14].animeName} src={animeListState[14].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[19].animeName} src={animeListState[19].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[3].animeName} src={animeListState[3].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[20].animeName} src={animeListState[20].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[17].animeName} src={animeListState[17].animeSrc}/></SwiperSlide>
        <SwiperSlide><AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={animeListState[15].animeName} src={animeListState[15].animeSrc}/></SwiperSlide>
        
      </Swiper>
        </div>
      </div>
      </>
    );
  }
  TopAnimeList.propTypes = {
    onPageChange: PropTypes.func,
    nameChange: PropTypes.func,
    srcChange: PropTypes.func,
  }
  TopAnimeList.defaultProps = {
    onPageChange: ()=>5,
    nameChange: ()=>null,
    srcChange: ()=>null,
  }
  
  
  export default TopAnimeList ;
  

