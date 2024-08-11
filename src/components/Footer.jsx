import { t } from 'i18next'
import React, { useState } from 'react'

// ico
import faceBock from '../img/icons/Facebook.svg'
import insta from '../img/icons/Instagram.svg'
import linkedIn from '../img/icons/Linkedin.svg'
import snapChat from '../img/icons/Snapchat.svg'
import twiter from '../img/icons/x twitter.svg'
import YouTube from '../img/icons/Youtube.svg'
import { IoCall } from "react-icons/io5";
import { FaAnglesUp } from "react-icons/fa6";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  function handleScroll() {
    if (window.scrollY >= 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }
  window.addEventListener('scroll', handleScroll);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>
      <button onClick={scrollToTop} className={`scrollBtn ${isVisible ? 'show' : ''}`}><FaAnglesUp/></button>
      <div className="container">
        <div className="info">
          <h4>{t('Al Riyadh, Saudi Arabia')}</h4>
          <div className="phones">
            <div className="phone"><IoCall/> +966550426428</div>
            <div className="phone"><IoCall/> +966531039880</div>
          </div>
          <a href="mailto:mohamedms8989@gmail.com">mohamedms8989@gmail.com</a>
        </div>
        <div className="middle">
          <img src={require('../img/logo.png')} alt="" />
          <div className="social">
            <a href="https://www.facebook.com/mabani.tatweer"><img src={faceBock} alt="" /></a>
            <a href="https://www.instagram.com/mabani.tatweer/"><img src={insta} alt="" /></a>
            <a href="https://www.linkedin.com/company/102943389/"><img src={linkedIn} alt="" /></a>
            <a href="https://www.snapchat.com/add/mabanialtatweer?share_id=JLPIANhbDzQ&locale=en-EG"><img src={snapChat} alt="" /></a>
            <a href="https://x.com/MabaniAltatweer"><img src={twiter} alt="" /></a>
            <a href="https://www.youtube.com/@MabaniCompany"><img src={YouTube} alt="" /></a>
          </div>
        </div>
        <div className="links">
          <a href="/home">{t('home')}</a>
          <hr />
          <a href="/contact">{t('contact us')}</a>
          <a href="/blogs">{t('blogs')}</a>
          <a href="/about">{t('about us')}</a>
        </div>
      </div>
    </footer>
  )
}
