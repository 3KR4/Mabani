import '../css/other.css'
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { t } from 'i18next';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {

    const emailData = {
      ...data,
      to_name: 'Mabani Company',
      from_name: data.name,
    };

    emailjs.send('service_m0wyedj', 'template_a3tl5b3', emailData, 'Y8vwhkBPJ1j9SMAXP')
      .then((result) => {
      alert('Message Sent Successfully');
      }, (error) => {
        alert('Failed to Send Message');
      });
  };


  return (
    <div className='contactUs container'>
      <h1>{t('Al Riyadh, Saudi Arabia')}</h1>
      <div className='mapHolder'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4682.211088329232!2d46.703265599999995!3d24.568637499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0f07aa334d69%3A0x832b8cb46610a22c!2zSFA5MytGODLYjCDYp9mE2LHZitin2LYgMTQ3MTLYjCDYp9mE2LPYudmI2K_Zitip!5e1!3m2!1sar!2seg!4v1723397850739!5m2!1sar!2seg&zoom=30"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>{t('contact us')}</h3>
        <div className="hold">
          <label htmlFor="name">{t('name')}</label>
          <div className="inputHolder">
            <input 
              type="text" 
              placeholder={t('enter your name')} 
              {...register('name', { required: true, minLength: 3 })}
            />
            {errors.name && <span className='error'>{t('name must be at least 3 characters long')}</span>}
          </div>
        </div>
        <div className="hold">
          <label htmlFor="location">{t('location')}</label>
          <div className="inputHolder">
            <input 
              type="text" 
              placeholder={t('enter your location')} 
              {...register('location', { required: true })}
            />
            {errors.location && <span className='error'>{t('location is required')}</span>}
          </div>
        </div>
        <div className="hold">
          <label htmlFor="email">{t('email')}</label>
          <div className="inputHolder">
            <input 
              type="email" 
              placeholder={t('enter your email')} 
              {...register('email', { 
                required: true, 
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: t('invalid email address')
                }
              })}
            />
            {errors.email && <span className='error'>{errors.email.message}</span>}
          </div>
        </div>
        <div className="hold">
          <label htmlFor="messageTitle">{t('title')}</label>
          <div className="inputHolder">
            <input 
              type="text" 
              placeholder={t('enter message title')}
              {...register('messageTitle', { required: true, minLength: 3 })}
            />
            {errors.messageTitle && <span className='error'>{t('message title must be at least 3 characters long')}</span>}
          </div>
        </div>
        <div className="hold textarea">
          <label htmlFor="messageBody">{t('message')}</label>
          <div className="inputHolder">
            <textarea 
            rows={6}
              placeholder={t('enter your message')}
              {...register('messageBody', { required: true, minLength: 15 })}
            />
            {errors.messageBody && <span className='error'>{t('message must be at least 15 characters long')}</span>}
          </div>
        </div>
        <button className='main-button' type="submit">{t('send message')}</button>
      </form>
    </div>
  );
};

export default ContactForm;