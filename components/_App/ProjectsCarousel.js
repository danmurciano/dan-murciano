import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image, Icon } from 'semantic-ui-react';
import Modal from 'react-bootstrap/Modal';
import HomeDesign from "../Modals/home-design";
import WeatherPoint from "../Modals/weather-point";
import SoundExplorer from "../Modals/sound-explorer";


export default function ProjectsCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(project, breakpoint) {
    setFullscreen(breakpoint);
    setShow(project);
  }


  return (
    <>
    <Carousel
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={false}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all 400ms ease-in-out"
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    // deviceType={this.props.deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  >

    <div class="project">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="project-image-div">
            <a href="http://home-design.danmurciano.vercel.app" target="_blank" rel="noopener noreferrer">
              <Image className="project-image" src="images/hd8.jpg"/>
            </a>
          </div>   
        </div>

        <div class="col-lg-4 col-md-12 project-body">
          <h3> Home Design </h3>
          <p class="project-text"> A React/ Next.js based mock e-commerce app.
            Includes both full user functionality and admin mode.
          </p>
          <p class="project-links">
            <a href="http://home-design.danmurciano.vercel.app" target="_blank" rel="noopener noreferrer">
              <Icon name="computer" size="large" link/>
            </a>

            <a href="https://github.com/danmurciano/home-design" target="_blank" rel="noopener noreferrer">
              <Icon name="github" size="large" link/>
            </a>
            <button class="read-more" onClick={() => handleShow(HomeDesign)} >
              Read more
              <Icon className="arrow-icon" name="arrow alternate circle right" />
            </button>
          </p>
        </div>
      </div>
    </div>


    <div class="project">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="project-image-div">
            <a href="https://weather-point.vercel.app" target="_blank" rel="noopener noreferrer">
              <Image className="project-image" src="images/wp6.jpg"/>
            </a>
          </div>   
        </div>

        <div class="col-lg-4 col-md-12 project-body">
          <h3> Weather Point </h3>
          <p class="project-text"> A React / Next.js based weather web app.
            It shows current, hourly and daily weather of a user selected location.
          </p>
          <p>
            <a href="https://weather-point.vercel.app" target="_blank" rel="noopener noreferrer">
              <Icon name="computer" size="large" link/>
            </a>

            <a href="https://github.com/danmurciano/WeatherPoint" target="_blank" rel="noopener noreferrer">
              <Icon name="github" size="large" link/>
            </a>
            <button class="read-more" href="/weather-point" onClick={() => handleShow(WeatherPoint)}>
              Read more
              <Icon className="arrow-icon" name="arrow alternate circle right" />
            </button>
          </p>
        </div>
      </div>
    </div>


    <div class="project">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="project-image-div">
            <a href="https://sound-explorer.onrender.com" target="_blank" rel="noopener noreferrer">
              <Image className="project-image" src="images/se1.jpg"/>
            </a>
          </div>   
        </div>

        <div class="col-lg-4 col-md-12 project-body">
          <h3> Sound Explorer </h3>
          <p class="project-text"> a Flask based web app powered by the Spotify Api that
             allows users to get music recommendations based off a reference track.
          </p>
          <p>
            <a href="https://sound-explorer.onrender.com" target="_blank" rel="noopener noreferrer">
              <Icon name="computer" size="large" link/>
            </a>

            <a href="https://github.com/danmurciano/sound-explorer" target="_blank" rel="noopener noreferrer">
              <Icon name="github" size="large" link/>
            </a>
            <button class="read-more" href="/sound-explorer" onClick={() => handleShow(SoundExplorer)}>
              Read more
              <Icon className="arrow-icon" name="arrow alternate circle right" />
            </button>
          </p>
        </div>
      </div>
    </div>


    <div class="project">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="project-image-div">
            <a href="https://jose-murciano.vercel.app" target="_blank" rel="noopener noreferrer">
              <Image className="project-image" src="images/gallery.jpg"/>
            </a>
          </div>   
        </div>

        <div class="col-lg-4 col-md-12 project-body">
          <h3> Paintings Gallery </h3>
          <p class="project-text"> A personal website of a talented painter.
             Includes an animated image gallery with index selection.
          </p>
          <p>
            <a href="https://jose-murciano.vercel.app" target="_blank" rel="noopener noreferrer">
              <Icon name="computer" size="large" link/>
            </a>
          </p>
        </div>
      </div>
    </div>

    <div class="project">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="project-image-div">
            <a href="https://travel-bug-danmurciano.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Image className="project-image" src="images/tb.jpg"/>
            </a>
          </div>   
        </div>

        <div class="col-lg-4 col-md-12 project-body">
          <h3> Travel Bug </h3>
          <p class="project-text"> An online magazine with travel related articles and tips. </p>
          <p>
            <a href="https://travel-bug-danmurciano.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Icon name="computer" size="large" link/>
            </a>
          </p>
        </div>
      </div>
    </div>

    <div class="project">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="project-image-div">
            <a href="https://www.wtto-music.com/" target="_blank" rel="noopener noreferrer">
              <Image className="project-image" src="images/wtto.jpg"/>
            </a>
          </div>   
        </div>

        <div class="col-lg-4 col-md-12 project-body">
          <h3> "In the End" </h3>
          <p class="project-text"> A landing page for digital single release by "Welcome to the Outside"
             with streaming platforms links and social media sharing links.
          </p>
          <p>
            <a href="https://www.wtto-music.com/" target="_blank" rel="noopener noreferrer">
              <Icon name="computer" size="large" link/>
            </a>
          </p>
        </div>
      </div>
    </div>

    <div class="project">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="project-image-div">
            <a href="https://www.herbalist.org.il/" target="_blank" rel="noopener noreferrer">
              <Image className="project-image" src="images/herbalist.jpg"/>
            </a>
          </div>   
        </div>

        <div class="col-lg-4 col-md-12 project-body">
          <h3> Herbalist </h3>
          <p class="project-text"> A personal website of an Israel based Homeopathic doctor.
          </p>
          <p>
            <a href="https://www.herbalist.org.il/" target="_blank" rel="noopener noreferrer">
              <Icon name="computer" size="large" link/>
            </a>
          </p>
        </div>
      </div>
    </div>

  </Carousel>

  <Modal size='xl' show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
    {show}
  </Modal>
  </>
  )

}


