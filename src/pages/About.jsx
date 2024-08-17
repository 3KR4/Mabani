import '../css/about.css'
import { useTranslation } from 'react-i18next';
import { useAllContext } from "../Context";

// img
import Zizag from '../img/Zizag dark blu.svg'

const About = () => {
  const { t } = useTranslation();
  const { language } = useAllContext();

  return (
    <div className="about">
      <div className="backImg">
        <img src={require('../img/about1.jpg')} alt="background1" />
        <img src={require('../img/about3.png')} alt="background2" />
        <img src={require('../img/bar.png')} alt="background3" />
        <img src={require('../img/about2.png')} alt="background4" />
        <img src={require('../img/about4.png')} alt="background5" />
      </div>
      <div className="top container">
        <div className="head">
          <span>{t('Company')}</span>
          <h1>{t('MABANI')}</h1>
        </div>
        <div className="title">{t('The leading company in Designing, building and managing modern construction projects Furniture')}</div>
        <img 
          className='dataImg'
          src={language === 'ar' 
            ? require('../img/Mask Group 16.png') 
            : require('../img/Mask Group 16-en.png')} 
          alt="Mask Group" 
        />
      </div>
      <div className="iso container">
        <div className="topTitle title">
          {t('Company Certificates')}
        </div>
        <div className="sideTitle">
          {t('Classification and ISO Certificates')}
        </div>
        <div className="holder">
          <img src={require('../img/ISO 3.png')} alt="ISO 3" />
          <img src={require('../img/ISO 2.png')} alt="ISO 2" />
          <img src={require('../img/ISO 1.png')} alt="ISO 1" />
        </div>
        <img className='lastiso' src={require('../img/CERTEFICATE.jpg')} alt="CERTEFICATE" />
      </div>
    </div>
  );
}
export default About;