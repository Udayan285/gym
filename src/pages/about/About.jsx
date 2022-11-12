import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi hic eaque blanditiis magnam ut asperiores modi est velit suscipit architecto.
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Dignissimos nostrum qui quidem accusamus possimus facilis 
             incidunt ad molestias verotes ipsam praesentium 
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Error ipsa perferendis dignissimos. Exercitationem corporis,
              vitae expedita ducimus enim d
          </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quos 
            ipsum, ipsa labore corrupti animi incidunt ullam et explicabo corporis.</p>
        </div>
      </div>
    </section>


    <section className="about__Vision">
      <div className="container about__Vision-container">
        
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Dignissimos nostrum qui quidem accusamus possimus facilis 
             incidunt ad molestias vero deleniti neque accusantium explicabo optio 
             provident illum iusto vour.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Error ipsa perferendis dignissimos. Exercitationem corporis,
              vitae expedita ducimus eae!
          </p>

        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Dignissimos nostrum qui quidem accusamus possimus facilis 
             incidunt ad molestias ver
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Error ipsa perferendis dign
           </p>  
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quos 
            ipsum, ipsa labore corrupti animi incidunt ullam et explicabo corporis.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About