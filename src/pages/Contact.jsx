import '../css/other.css'
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { t } from 'i18next';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Submitted data:', data); // Check if data is as expected
    emailjs.send('service_hbui60s', 'template_xsgfqu7', data, 'v5g-oKR19wGPmZW7d')
      .then((result) => {
        console.log(result.text);
        alert('Message Sent Successfully');
      }, (error) => {
        console.log(error.text);
        alert('Failed to Send Message');
      });
  };

  console.log('Form errors:', errors); // Log errors object

  return (
    <div className='contactUs container'>
              <h1>{t('Al Riyadh, Saudi Arabia')}</h1>
      <div className='mapHolder'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d27628.34438364104!2d31.392415411669926!3d30.049964779134346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDAyJzI5LjEiTiAzMcKwMjMnNDYuNyJF!5e0!3m2!1sar!2seg!4v1715094139179!5m2!1sar!2seg&maptype=satellite"
        width="100%" 
        height="100%" 
        loading="lazy"
        style={{border: '0'}}
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