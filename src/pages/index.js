import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import styled from "styled-components";

// Full-bleed light band: light background + dark text for
// sections that alternate with the dark page background.
// $tone="grey" uses offWhite so adjacent light bands stay distinct.
const LightBand = styled.div`
  background-color: ${(props) =>
    props.$tone === "grey"
      ? props.theme.colors.offWhite
      : props.theme.colors.white};
  color: ${(props) => props.theme.colors.text};
  padding: 4rem 0 8rem;
`;

// Hero fills the rest of the viewport below the ~80px header,
// so the next section starts below the fold.
const HeroBand = styled.div`
  min-height: calc(100vh - 81px);
  display: flex;
  align-items: center;
  justify-content: center;

  > section {
    width: 100%;
  }
`;

const Home = () => {
  return (
    <Layout>
      <ScrollToTopButton />
      <HeroBand>
        <Section $grid>
          <Hero />
          <BgAnimation />
        </Section>
      </HeroBand>
      <LightBand>
        <Projects />
      </LightBand>
      <LightBand $tone="grey">
        <Timeline />
      </LightBand>
      <LightBand>
        <Technologies />
      </LightBand>
      <Acomplishments />
    </Layout>
  );
};

export default Home;
