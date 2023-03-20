import ProjectsCarousel from "./ProjectsCarousel";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function About() {
  return (
    <div class="projects" id="projects">
      <div class="projects-div">
        <AnimationOnScroll animateIn="animate__fadeIn" delay="80" animateOnce="true">
          <h2> Projects </h2>
         </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInRight" delay="150" animateOnce="true"> 
          <ProjectsCarousel />
        </AnimationOnScroll>
      </div>
    </div>
  )
}


