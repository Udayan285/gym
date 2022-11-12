import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className='logo'>
            <img src={Logo} alt="footer logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cumque 
            iste sequi ullam explicabo, repellendus adipisci quam sit illum facere.
          </p>
          <div className="footer__socials">
            <a href="https://linkedin.com" targer="_blank" rel='noreferrer noopener'><FaLinkedin/></a>
            <a href="https://facebook.com" targer="_blank" rel='noreferrer noopener'><FaFacebookF/></a>
            <a href="https://twitter.com" targer="_blank" rel='noreferrer noopener'><AiOutlineTwitter/></a>
            <a href="https://instragram.com" targer="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
          </div>
        </article>
        <article>
            <h4>Permalinks</h4>
            <Link to="/about">About</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/trainers">Trainers</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
        </article>
        <article>
            <h4>Insights</h4>
            <Link to="/s">Blog</Link>
            <Link to="/s">Case Studies</Link>
            <Link to="/s">Events</Link>
            <Link to="/s">Communities</Link>
            <Link to="/s">FAQs</Link>
        </article>
        <article>
            <h4>Get In Touch</h4>
            <Link to="/contact">Contact Us</Link>
            <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>Moho 2022 &copy; All rights Reserved</small>
        {/* 2.55.08scnd */}
      </div>
    </footer>
  )
}

export default Footer