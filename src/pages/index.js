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

// Full-bleed light band: white background + dark text for
// sections that alternate with the dark page background.
const LightBand = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.text};
  padding: 4rem 0 8rem;
`;

const Home = () => {
  return (
    <Layout>
      <ScrollToTopButton />
      <Section $grid>
        <Hero />
        <BgAnimation />
      </Section>
      <LightBand>
        <Projects />
      </LightBand>
      <Timeline />
      <LightBand>
        <Technologies />
      </LightBand>
      <Acomplishments />
    </Layout>
  );
};

export default Home;
