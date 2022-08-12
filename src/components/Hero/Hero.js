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
        Hi! I'm Afaq Khan
        <br />
        Welcome to my Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of React Mastery is to help aspiring and established
        deverlopers to take their development skills to the next level and build
        awesome apps.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://www.linkedin.com/in/afaqshahid-khan-102868179")
        }
      >
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
