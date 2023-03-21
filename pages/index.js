import React, { useState } from 'react';
import { Image, Icon } from 'semantic-ui-react';

import About from "../components/_App/About";
import Projects from "../components/_App/Projects";
import Header from "../components/_App/Header";
import { AnimationOnScroll } from 'react-animation-on-scroll';



export default function Home() {
  return (
    <>
    <Header/>
    <div class="pageHome" id="home">
      <div>
        <div class="home-image">
          <div class="home-image">
            <img class="home-image-front" />
          </div>
        </div>
    
        <div class="home-main">
          <h1> Custom Web Design </h1>
          <About/>       
          <Projects/>
        </div>

      </div>
    </div>
    </>
  );
}
