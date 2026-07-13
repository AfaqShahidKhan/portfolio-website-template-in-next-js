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

const PageWrapper = styled.div`
  > section {
    &:nth-of-type(2n + 2) {
      background-color: ${(props) => props.theme.colors.offWhite};
    }
  }
`;

const Home = () => {
  return (
    <Layout>
      <ScrollToTopButton />
      <PageWrapper>
        <Section $grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Timeline />
        <Technologies />
        <Acomplishments />
      </PageWrapper>
    </Layout>
  );
};

export default Home;
