import Skills from "./Skills";
import { Image } from 'semantic-ui-react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function About() {
  return (
    <div class="about">
      <div class="aboutText-div" id="about">

        <AnimationOnScroll animateIn="animate__fadeIn" delay="80" animateOnce="true">
          <h2> About </h2>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeIn" delay="300" animateOnce="true">
          <p class="aboutText"> As a software and web developer I’m on a constant search for this sweet spot 
          were aesthetics and functionality meet. Coming from a background in video editing, 
          I shifted into software development and was able to find a lot of similarities between the two, 
          as they both involve assembling and modifying little pieces in order to create a cohesive whole 
          that tells a story and is visually pleasing. </p>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeIn" delay="300" animateOnce="true">
          <p></p>
          <p class="aboutText"> I offer services in building and designing customized websites and web applications that fits the specific need of each client. Tell me about your
          brand and vision, and I’ll be happy to create a website to showcase it. </p>
        </AnimationOnScroll>
      </div>

      <AnimationOnScroll animateIn="animate__fadeIn" delay="600" animateOnce="true">
        <div class="image-dan">
          <Image className="image-dan" circular src="images/dan_image.jpg" />
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeIn" delay="300" animateOnce="true">
        <div class="skills-div">
          <p class="aboutText">
          Software and web technologies are constantly changing and improving, 
          and as a developer I often adapt new tools and pick up on new skills.
          These are some of the tools I use most:
          </p>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeIn" delay="600" animateOnce="true">
        <Skills />
      </AnimationOnScroll>
 
    </div>
  )
}


