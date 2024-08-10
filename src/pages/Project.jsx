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
    <div className="project-page container">
      {project == 'management' && (
        <div className='managmementhold'>
          <h1 className='managtitle'>{t('Project Management and Engineering Consulting')}</h1>
          <h3 className="sideTitle">{t('Some Project Models')}</h3>
          <ul>
            <li>{t('Jeddah Islamic Port Development Project')}</li>
            <li>{t('Al-Qadeer Company Project in Riyadh')}</li>
            <li>{t('Saloumi Company Project of Saudi Aramco in Tanajib')}</li>
            <li>{t('Flood Infrastructure Project of Jeddah Municipality in Al-Huda and Al-Ajaweed Area')}</li>
            <li>{t('Schools Project of Development Company in Al-Baha and Tabuk Area')}</li>
            <li>{t('Residential Complex Project of Al-Aqaria Company in Riyadh')}</li>
            <li>{t('Residential Complex Project of Al-Saeedan Company in Riyadh')}</li>
            <li>{t('Residential Complex Project of Al-Mazini Company in Riyadh')}</li>
            <li>{t('Residential Complex Project of National Housing Company in Riyadh')}</li>
            <li>{t('Ministry of Health Hospital Project in Al-Dawasir')}</li>
            <li>{t('Administrative Center Project of Riyadh Municipality')}</li>
            <li>{t('Residential Complex Project of Al-Basatin Company in Riyadh')}</li>
          </ul>
        </div>
      )}
      <h1>{t(project == 'furniture' ? 'The furniture' : project == 'design' ? 'the design' : project == 'contracting' ? "Contracting" : "Project Management and Engineering Consulting" )}</h1>
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
  );
}