import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I'm Afaq Shahid Khan
        <br />
    
      </SectionTitle>
      <SectionText>
      Having Experties in JavaScript, React.js, Next.js, WebSocket,
      JSON, NPM, Postman, jQuery, AJAX, RESTful APIs, Debugging, GIT,
      HTML, CSS,Wordpress, Bootstrap, Material UI, Tailwind CSS, Semantic UI.
      </SectionText>
      <Button
        onClick={() => {
          window.open("https://www.linkedin.com/in/afaq-shahid-khan", "_blank");
        }}
      >
        Learn more
      </Button>

    </LeftSection>
  </Section>
);

export default Hero;
