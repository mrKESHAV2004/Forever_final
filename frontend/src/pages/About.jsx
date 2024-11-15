import React from 'react';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';
import Title from '../components/Title';
const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img}/>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idear to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
          <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at forver is to empower customers with choice, convinience and confidence.We're dedicated to providing a seamless shopping expirience that exceeds expectation from browsing and ordering to delivery and beyond</p>
        </div>
        </div>
        <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>
        <div className='flex flex-row md:flex-row text-sm mb-20'>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p> We meticulously select ond vet each produci to-enure it mee our stringent quality sandards.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience:</b>
            <p> Wth our user-friendly interfoce ond hassle-free ordering process, shopping has neverbeen easier.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptionol Customer Serviices:</b>
            <p> Our team of dedicoted professionols is here to assist you the way, enduring your satfaction is aur top priarity.</p>
          </div>
        </div>
        <NewsletterBox/>
    </div>
  )
}

export default About
