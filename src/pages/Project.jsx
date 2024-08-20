import { t } from 'i18next';
import { useParams } from 'react-router-dom';
import { design, furniture, contracting, management } from '../data';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

export default function Project() {
  const { project } = useParams();
  const [currentSwipe, setCurrentSwipe] = useState(1);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const categoryData = {
    design,
    furniture,
    contracting,
    management
  };

  const filteredProjects = project ? categoryData[project] || [] : [];

  return (
    <div className="project-page">
      {project == 'management' && (
        <div className='managmementhold'>
          <img src={require('../img/إدارة\ التنفيذ.jpg')} alt="" />
          <img src='' alt="" />
          <h1 className='managtitle'>{t('PROJECT MANAGEMENT & ENGINEERING CONSULTING')}</h1>
          <h3 className="sideTitle">{t('Some project Models')}</h3>
          <ul className='container'>
            <li>{t('Jeddah Islamic Port Development')}</li>
            <li>{t('Al Qadiyah Co. in Riyadh')}</li>
            <li>{t('Alsalomy Co. Project in Tanajib with ARAMCO')}</li>
            <li>{t('Infrastructure Work in Jeddah (Alhuda & Alajaweed)')}</li>
            <li>{t('Schools Projects in Tabuk & Baha')}</li>
            <li>{t('Villas Compound of Al Akaria Co. in Riyadh')}</li>
            <li>{t('Villas Compound of Al Al Saedan Co. in Riyadh')}</li>
            <li>{t('Villas Compound of Almozaini Co. in Riyadh')}</li>
            <li>{t('Villas Compound of National Housing Company in Riyadh')}</li>
            <li>{t('Hospital of Wadi Aldawaser')}</li>
            <li>{t('Administration Buildings Center of Rawda in Riyadh')}</li>
            <li>{t('Villas Compound of Al Basateen Co. in Riyadh')}</li>
          </ul>
        </div>
      )}
      <div className="container">
        <h1>{t(project == 'furniture' ? 'THE FURNITURE' : project == 'design' ? 'THE DESIGN' : project == 'contracting' ? "CONTRACTING" : "Project Management and Engineering Consulting" )}</h1>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true} // Enable looping
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}

          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onSlideChange={(swiper) => {
            setCurrentSwipe(swiper.realIndex + 1);
          }}
        >

          {filteredProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <img src={project.img} alt={`Project ${project.id}`} />
            </SwiperSlide>
          ))}

          <div className="navigationss">
            <div ref={prevRef} className="custom-prev">
              <FaAngleLeft/>
            </div>
            <div ref={nextRef} className="custom-next">
              <FaAngleRight/>
            </div>
          </div>
          <div className="pag">
            {currentSwipe}
            -
            {filteredProjects.length}
          </div>
        </Swiper>
      </div>
    </div>
  );
}