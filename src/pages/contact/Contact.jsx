import React from 'react'
import './contact.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium soluta, nobis placeat adipisci ipsum quaerat.
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:odoynnath@gmail.com" target="_blank" rel='noreferrer noopener'><MdEmail/></a>
          <a href="http://m.me/udayan285" target="_blank" rel='noreferrer noopener'><BsMessenger/></a>
          <a href="https://wa.me/+8801319037021" target="_blank" rel='noreferrer noopener'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact