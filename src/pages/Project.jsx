import { t } from 'i18next';
import { useParams } from 'react-router-dom';
import { design, furniture, contracting, Management } from '../data';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';

export default function Project() {
  const { project } = useParams();
  const [currentSwipe, setCurrentSwipe] = useState(1);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const categoryData = {
    design,
    furniture,
    contracting,
    Management
  };

  const filteredProjects = project ? categoryData[project] || [] : [];

  return (
    <div className="project-page container">
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

        <div ref={prevRef} className="custom-prev">
          <img src={require('../img/arrowleft.png')} alt="" />
        </div>
        <div ref={nextRef} className="custom-next">
          <img src={require('../img/arrowright.png')} alt="" />
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