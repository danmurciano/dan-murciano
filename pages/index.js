import React from "react";
import { Image, Icon } from 'semantic-ui-react';


export default function Home() {
  return (
    <div class="pageHome" id="home">
      <div>
        <div class="home-image">
          <div class="home-image">
            <img class="home-image-front" />
          </div>
        </div>

        <div class="home-main">

          <div class="about">
            <div class="aboutText-div" id="about">
              <h2> - About - </h2>
              <p class="aboutText"> A software developer who designs apps that employ both aesthetics and functionality.
              Constantly exploring, and finding new ways for integrating technology and art.
              Whether it's building a UI component, or carefully planning a database with particular sets of data and properties,
              I approach problems with an analytical, somewhat scientific mindset, breaking them down to their core components,
              and coming up with solutions. </p>
              <p class="aboutText"> Before becoming a developer I worked as a video & audio editor, where I often found myself meticulously
              assembling and modifying little pieces in order to create a cohesive whole. As a developer, I find that I use a rather similar
              process, although in a different context. </p>
            </div>
            <div class="image-dan">
              <Image className="image-dan" circular src="images/dan_image.jpg" />
            </div>

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


          <div class="projects" id="projects">
            <h2> - Projects - </h2>

            <div class="row">

              <div class="project-col col-xl-3 col-lg-6 col-md-12">
                <div class="project">
                  <div class="project-image-div">
                    <a href="http://home-design.danmurciano.vercel.app" target="_blank" rel="noopener noreferrer">
                      <Image className="project-image" src="images/hd_main.jpg"/>
                    </a>
                  </div>
                  <div class="project-body">
                    <h3> Home Design </h3>
                    <p class="project-text"> A React/ Next.js based mock web store app.
                      Includes both user functionality and administartor mode.
                    </p>
                    <p>
                      <a href="http://home-design.danmurciano.vercel.app" target="_blank" rel="noopener noreferrer">
                        <Icon name="computer" size="large" link/>
                      </a>

                      <a href="https://github.com/danmurciano/home-design" target="_blank" rel="noopener noreferrer">
                        <Icon name="github" size="large" link/>
                      </a>
                      <a class="read-more" href="/home-design">
                        Read more
                        <Icon className="arrow-icon" name="arrow alternate circle right" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div class="project-col col-xl-3 col-lg-6 col-md-12">
                <div class="project">
                  <div class="project-image-div">
                    <a href="https://weather-point.vercel.app" target="_blank" rel="noopener noreferrer">
                      <Image className="project-image" src="images/wp_main2.jpg"/>
                    </a>
                  </div>
                  <div class="project-body">
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
                      <a class="read-more" href="/weather-point">
                        Read more
                        <Icon className="arrow-icon" name="arrow alternate circle right" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div class="project-col col-xl-3 col-lg-6 col-md-12">
                <div class="project">
                  <div class="project-image-div">
                    <a href="https://sound-explorer.onrender.com" target="_blank" rel="noopener noreferrer">
                      <Image className="project-image" src="images/se_main.jpg"/>
                    </a>
                  </div>
                  <div class="project-body">
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
                      <a class="read-more" href="/sound-explorer">
                        Read more
                        <Icon className="arrow-icon" name="arrow alternate circle right" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div class="project-col col-xl-3 col-lg-6 col-md-12">
                <div class="project">
                  <div class="project-image-div">
                    <a href="https://jose-murciano.vercel.app" target="_blank" rel="noopener noreferrer">
                      <Image className="project-image" src="images/gallery.jpg"/>
                    </a>
                  </div>
                  <div class="project-body">
                    <h3> Paintings Gallery </h3>
                    <p class="project-text"> A simple React based personal website of a painter.
                       Includes an animated image gallery with index selection.
                    </p>
                    <p>
                      <a href="https://jose-murciano.vercel.app" target="_blank" rel="noopener noreferrer">
                        <Icon name="computer" size="large" link/>
                      </a>

                      <a href="https://github.com/danmurciano/jose-murciano/tree/master" target="_blank" rel="noopener noreferrer">
                        <Icon name="github" size="large" link/>
                      </a>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>


      <div class="footer">
        <div id="contact">
          <h2> - Contact - </h2>
          <div class="icon-row">
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
        <p class="footer-copyright"> {`© All Rights Reserved Dan Murciano 2022`} </p>
      </div>

    </div>
  </div>
</div>
  );
}
