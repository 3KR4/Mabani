// Home.js
import '../css/home.css'
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { useTranslation } from 'react-i18next';
import { useAllContext } from "../Context";

import { IoTriangleSharp } from "react-icons/io5";

// img
import Zizag from '../img/Zizag dark blu.svg'
import orderprice from '../img/orderprice.svg'
import orderprice2 from '../img/orderprice-en.svg'

const Home = () => {
  const { t } = useTranslation();
  const { language } = useAllContext();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="home">
      <div className="landing">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true} // Enable looping
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        speed={1500}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        <SwiperSlide><img src={require('../img/landing 1.jpg')} /></SwiperSlide>
        <SwiperSlide><img src={require('../img/landing 2.jpg')} /></SwiperSlide>
        <SwiperSlide><img src={require('../img/landing 3.jpg')} /></SwiperSlide>
        <SwiperSlide><img src={require('../img/landing 4.jpg')} /></SwiperSlide>

        <div ref={prevRef} className="custom-prev">
          <img src={require('../img/arrowleft.png')} alt="" />
        </div>
        <div ref={nextRef} className="custom-next">
          <img src={require('../img/arrowright.png')} alt="" />
        </div>
      </Swiper>
        <div className="text">
          <h1>{t('MABANI Company')}</h1>
          <p>{t('For project management and engineering consulting')}</p>
        </div>
      </div>
      <div className="priceList">
        <img className='bigImg' src={require('../img/pricelist.png')} alt="" />
        <img className='zigzag' src={Zizag} alt="" />
        <a href='' className="price">
          <div className="image">
            <img src={language == 'ar' ? orderprice : orderprice2} alt="" />
          </div>
          <IoTriangleSharp className='shape'/>
        </a>
      </div>
      <div className="what-we-do">
        <div className="back">
          <h2 className="main-title">
            {t('Ideas that reflect a modern lifestyle Based on nine years of experience of precision and creativity')}
          </h2>
        </div>
        <div className="holder container">
          <div className="card">
            <img src={require('../img/idea 1.jpg')} alt="" />
            <p>{t('Implementing projects with the highest quality and at the appropriate price, while adhering to the agreed upon deadlines without delay')}</p>
          </div>
          <div className="card">
            <img src={require('../img/idea 2.jpg')} alt="" />
            <p>{t('We study projects with high professionalism through a specialized team of engineers and consultants')}</p>
          </div>
          <div className="card">
            <img src={require('../img/idea 3.jpg')} alt="" />
            <p>{t('We plan the living spaces in your home or company with interior designs that utilize all spaces creatively')}</p>
          </div>
        </div>
      </div>
      <div className="specialization container">
        <div className="top">
          <span className='one'></span>
          <span className='two'></span>
          <span className='there'></span>
          <h3 className="title">{t('Fields and specializations')}</h3>
        </div>
        <div className="bottom">
          <h3 className='title'>{t('An integrated engineering team to create the required integrated designs at the highest level and best quality using the latest engineering programs needed in all specializations')}</h3>
          <div className="main">
            <div className="des-cont">
              <div>
                <h4>{t('Contracting')}</h4>
                <ul>
                  <li>{t('Construction')}</li>
                  <li>{t('Infrastructure')}</li>
                  <li>{t('Maintenance and Operation')}</li>
                  <li>{t('Reinforcement and Restoration')}</li>
                </ul>
              </div>
            </div>
            <div className="des-cont">
              <div>
                <h4>{t('Design')}</h4>
                <ul>
                  <li>{t('Architectural')}</li>
                  <li>{t('Structural')}</li>
                  <li>{t('Electromechanical')}</li>
                  <li>{t('BIM')}</li>
                </ul>
              </div>
            </div>

          </div>
          <div className="side">
            <h4>{t('Project management & engineering consultations')}</h4>
            <h4>{t('The furniture')}</h4>
          </div>
        </div>
      </div>
      <div className="build ">
        <img className='engineer' src={require('../img/مهندس.png')} alt="" />
        <img className='zigzag' src={Zizag} alt="" />
        <h1>{t('Project management & engineering consultations')}</h1>
      </div>
      <div className="implement container">
        <div className="top">
          <h3>{t('We implement your project')}</h3>
          <p>{t('With high quality standards, we are distinguished by our attention to every detail of sophistication and luxury at the hands of a specialized engineering team, trained technical workers, and equipment to carry out the required tasks at the highest level and best quality')}</p>
        </div>
        <p className="middle">{t('We have an engineering team in all specializations to manage projects in all their stages, BIM and BMI We carry out all our steps on the basis of the highest technology and we are keen to apply the engineering consulting methodology for projects Through social media, we communicate with you on L. We respond directly to all your inquiries and requirements')}</p>
        <div className="bottom">
          <h4>{t('Our priorities include the following')}</h4>
          <ul>
            <li>{t('Conducting feasibility studies for projects')}</li>
            <li>{t('Preparing timetables and complete reports with a systematic application')}</li>
            <li>{t('Supervising and following up on projects at all stages')}</li>
            <li>{t('Engineering consulting for projects with the availability of a response service using social media to respond directly to customers')}</li>
          </ul>
          <a href="">{t('Share your thoughts with us')}</a>
        </div>
      </div>
      <div className="projects">
        <div className="sideTitle">{t('Company projects')}</div>
        <div className="holder container">
          <div className="card">
            <a href="/projects/design" className="image">
              <img src={require('../img/projects 1.jpg')} alt="" />
            </a>
            <a href="/projects/design">{t('view projects')}</a>
            <h3>{t('Design')}</h3>
          </div>
          <div className="card">
            <a href="/projects/contracting" className="image">
              <img src={require('../img/projects 2.jpg')} alt="" />
            </a>
            <a href="/projects/contracting">{t('view projects')}</a>
            <h3>{t('Contracting')}</h3>
          </div>
          <div className="card">
            <a href="/projects/management" className="image">
              <img src={require('../img/projects 2.jpg')} alt="" />
            </a>
            <a href="/projects/management">{t('view projects')}</a>
            <h3>{t('Project Management & Engineering Consulting')}</h3>
          </div>
          <div className="card">
            <a href="/projects/furniture" className="image">
              <img src={require('../img/projects 4.jpeg')} alt="" />
            </a>
            <a href="/projects/furniture">{t('view projects')}</a>
            <h3>{t('The furniture')}</h3>
          </div>
        </div>
        <h1>{t('With us your dream comes true')}</h1>
      </div>
    </div>
  );
}

export default Home;