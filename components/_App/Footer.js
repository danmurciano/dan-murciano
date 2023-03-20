import { Image, Icon } from 'semantic-ui-react';

export default function Footer() {

  return (
    <div class="footer">
      <div id="contact">
        <h4> Contact </h4>
        <div class="icon-row">
          <a href={process.env.EMAIL}>
            <Icon link name="envelope" className="menu-icon" size="big" inverted color="grey"/>
          </a>
          <a href={process.env.LINKEDIN} target="_blank" rel="noopener noreferrer">
            <Icon link name="linkedin" className="menu-icon" size="big" inverted color="grey"/>
          </a>
          <a href={process.env.GITHUB} target="_blank" rel="noopener noreferrer">
            <Icon link name="github" className="menu-icon" size="big" inverted color="grey"/>
          </a>
        </div>
        <p class="footer-copyright"> {`© All Rights Reserved Dan Murciano ${new Date().getFullYear()}`} </p>
      </div>
    </div>
  );
}
