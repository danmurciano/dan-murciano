import React from "react";
import { Image, Icon } from 'semantic-ui-react';
import Header from "../components/_App/Header";


export default function Home() {
  return (
    <div class="pageHome" id="home">
      <Header />
      <div>
        <div class="home-image">
          <div class="home-image">
            <img class="home-image-front" />
          </div>
        </div>

        <div class="home-main">
          <div class="white">
          <div class="section">
            <div class="aboutText-div" id="about">
              <h2> - About - </h2>
              <p class="aboutText"> I’m a self-taught web developer with a background in video and audio editing.
              Whether it's building a UI component, or carefully planning a database with particular sets of data and attributes,
              I enjoy analyzing a problem and breaking it down to its core components, employing a somewhat scientific approach to the process.
              I'm also interested in the visual side, and I tend to prefer designs that are clean and elegant, with a good balance of aesthetics and functionality. </p>
            </div>
            <div class="image-dan">
              <Image className="image-dan" circular src="images/dan_image.jpg" />
            </div>
          </div>
          </div>


          <div class="white">
          <div class="section">
            <h2> - Skills - </h2>
            <div class="row icon-row">
              <Image className="skills-icon" src="images/logo_html.jpg" />
              <Image className="skills-icon" src="images/logo_css.jpg" />
              <Image className="skills-icon" src="images/logo_js.jpg" />
              <Image className="skills-icon" src="images/logo_react.jpg" />
              <Image className="skills-icon" src="images/logo_next.jpg" />
            </div>
            <div class="row icon-row">
              <Image className="skills-icon" src="images/logo_node.jpg" />
              <Image className="skills-icon" src="images/logo_mongodb.jpg" />
              <Image className="skills-icon" src="images/logo_postgresql.jpg" />
              <Image className="skills-icon" src="images/logo_python.jpg" />
              <Image className="skills-icon" src="images/logo_ps.jpg" />
            </div>
          </div>
          </div>


          <div class="color">
          <div class="section" id="projects">
            <h2> - Projects - </h2>

            <div class="project">
              <div class="row project-header">
                <div class="col col-icon-left"/>
                <div class="col">
                  <h3> Home Design </h3>
                </div>
                <div class="col col-icon">
                  <a href="http://home-design.danmurciano.vercel.app" target="_blank" rel="noopener noreferrer">
                    <Icon name="computer" size="large" link/>
                  </a>
                </div>
                <div class="col col-icon">
                  <a href="https://github.com/danmurciano/home-design" target="_blank" rel="noopener noreferrer">
                    <Icon name="github" size="large" link/>
                  </a>
                </div>
              </div>
              <div class="project-image-div">
                <a href="http://home-design.danmurciano.vercel.app" target="_blank" rel="noopener noreferrer">
                  <Image className="project-image" src="images/hd1.jpg"/>
                </a>
              </div>
              <p class="project-text"> A React/ Next.js based mock web store app.
                Includes both user functionality and administartor mode.
                <a class="read-more" href="/home-design">
                  Read more
                  <Icon className="arrow-icon" name="arrow alternate circle right" />
                </a>
              </p>
            </div>

            <div class="project">
              <div class="row project-header">
                <div class="col col-icon-left"/>
                <div class="col">
                  <h3> Weather Point </h3>
                </div>
                <div class="col col-icon">
                  <a href="https://weather-point.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Icon name="computer" size="large" link/>
                  </a>
                </div>
                <div class="col col-icon">
                  <a href="https://github.com/danmurciano/WeatherPoint" target="_blank" rel="noopener noreferrer">
                    <Icon name="github" size="large" link/>
                  </a>
                </div>
              </div>
              <div class="project-image-div">
                <a href="https://weather-point.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Image className="project-image" src="images/wp1.jpg"/>
                </a>
              </div>
              <p class="project-text"> A React / Next.js based weather web app.
                It shows current, hourly and daily weather of a user selected location.
                <a class="read-more" href="/weather-point">
                  Read more
                  <Icon className="arrow-icon" name="arrow alternate circle right" />
                </a>
              </p>
            </div>

            <div class="project">
              <div class="row project-header">
                <div class="col col-icon-left"/>
                <div class="col">
                  <h3> Paintings Gallery </h3>
                </div>
                <div class="col col-icon">
                  <a href="https://jose-murciano.vercel.app" target="_blank" rel="noopener noreferrer">
                    <Icon name="computer" size="large" link/>
                  </a>
                </div>
                <div class="col col-icon">
                  <a href="https://github.com/danmurciano/jose-murciano/tree/master" target="_blank" rel="noopener noreferrer">
                    <Icon name="github" size="large" link/>
                  </a>
                </div>
              </div>
              <div class="project-image-div">
                <a href="https://jose-murciano.vercel.app" target="_blank" rel="noopener noreferrer">
                  <Image className="project-image" src="images/gallery.jpg" />
                </a>
              </div>
              <p class="project-text"> A simple React based personal website of a painter.
                 Includes an animated image gallery with index selection.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="section" id="contact">
          <h2> - Contact - </h2>
          <div>
            <a href="mailto:danm.editing@gmail.com">
              <Icon link name="envelope" className="menu-icon" size="big" inverted color="grey"/>
            </a>
            <a href="https://www.linkedin.com/in/dan-murciano-b751b4114" target="_blank" rel="noopener noreferrer">
              <Icon link name="linkedin" className="menu-icon" size="big" inverted color="grey"/>
            </a>
            <a href="https://github.com/danmurciano" target="_blank" rel="noopener noreferrer">
              <Icon link name="github" className="menu-icon" size="big" inverted color="grey"/>
            </a>
          </div>
        <p> {`© All Rights Reserved Dan Murciano 2021`} </p>
      </div>

    </div>
  </div>
</div>
  );
}
