import { Image } from 'semantic-ui-react';

export default function Skills() {
  return (
    <div>
      <div class="row icon-row">
        <Image className="skills-icon" src="images/logo_html.png" />
        <Image className="skills-icon" src="images/logo_css.png" />
        <Image className="skills-icon" src="images/logo_js.png" />
        <Image className="skills-icon" src="images/logo_react.png" />
        <Image className="skills-icon" src="images/logo_next.png" />
      </div>
      <div class="row icon-row">
        <Image className="skills-icon" src="images/logo_node.png" />
        <Image className="skills-icon" src="images/logo_mongodb.png" />
        <Image className="skills-icon" src="images/logo_postgresql.png" />
        <Image className="skills-icon" src="images/logo_python.png" />
        <Image className="skills-icon" src="images/logo_ps.png" />
      </div>
    </div>
  )
}


