import React from 'react'
import { useAllContext } from "../Context";
import { useTranslation } from 'react-i18next';

// ico
import faceBock from '../img/icons/Facebook.svg'
import insta from '../img/icons/Instagram.svg'
import linkedIn from '../img/icons/Linkedin.svg'
import snapChat from '../img/icons/Snapchat.svg'
import twiter from '../img/icons/x twitter.svg'
import YouTube from '../img/icons/Youtube.svg'
import { IoCall } from "react-icons/io5";

// img 
import logo from '../img/logo.png'
import logo2 from '../img/MABANI.png'
import arabic from '../img/arabic.svg'
import english from '../img/english.svg'


export default function Header() {
  const { t, i18n } = useTranslation();
  const { language, setLanguage, direction } = useAllContext();

  function handleLanguageClick(){
    if (language === "en"){
      setLanguage("ar")
      i18n.changeLanguage("ar")
    }else{
      setLanguage("en")
      i18n.changeLanguage("en")
    }
  }

  return (
    <header>
      <div className='bar'></div>
      <div className="nav">
        <div className='container'>
          <div className="social">
            <a href="https://www.facebook.com/mabani.tatweer"><img src={faceBock} alt="" /></a>
            <a href="https://www.instagram.com/mabani.tatweer/"><img src={insta} alt="" /></a>
            <a href="https://www.linkedin.com/company/102943389/"><img src={linkedIn} alt="" /></a>
            <a href="https://www.snapchat.com/add/mabanialtatweer?share_id=JLPIANhbDzQ&locale=en-EG"><img src={snapChat} alt="" /></a>
            <a href="https://www.youtube.com/@MabaniCompany"><img src={twiter} alt="" /></a>
            <a href="https://x.com/MabaniAltatweer"><img src={YouTube} alt="" /></a>
          </div>
          <div className="links">
            <a href="/home">{t('home')}</a>
            <hr />
            <a href="/contact">{t('contact us')}</a>
            <a href="/blogs">{t('blogs')}</a>
            <a href="/about">{t('about us')}</a>
          </div>
          <div className='changeLang' onClick={handleLanguageClick}>{language == "en" ? (<img src={arabic} alt="" />) : (<img src={english} alt="" />)}</div>
        </div>
      </div>
      <div className="contnet">
        <div className="main container">
          <img src={logo} alt="" />
          <img src={logo2} alt="" />
        </div>
        <div className="phones container">
          <div className="phone"><IoCall/> +966550426428</div>
          <div className="phone"><IoCall/> +966531039880</div>
        </div>
        <ul className="adds">
          <li>{t('MABANI COMPANY')}</li>
          <li>{t('MABANI COMPANY')}</li>
          <li>{t('MABANI COMPANY')}</li>
          <li>{t('MABANI COMPANY')}</li>
          <li>{t('MABANI COMPANY')}</li>
          <li>{t('MABANI COMPANY')}</li>
          <li>{t('MABANI COMPANY')}</li>
        </ul>
      </div>
    </header>
  )
}