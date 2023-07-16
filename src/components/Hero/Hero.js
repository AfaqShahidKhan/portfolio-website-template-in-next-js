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
        Welcome to my Portfolio
      </SectionTitle>
      <SectionText>
        I'm passionate about accessibility, performance, and elegant design and
        things that usually make life easier for the users.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://www.linkedin.com/in/afaq-shahid-khan-102868179")
        }
      >
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
