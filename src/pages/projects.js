import React from "react";
import { Layout } from "../layout/Layout";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "../components/Projects/ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../styles/GlobalComponents";
import { myProjects, projects } from "../constants/constants";

const Projects = () => (
    <Layout>
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <ScrollToTopButton />
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <br></br>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit} target="_blank" >Visit</ExternalLinks>
              <ExternalLinks href={p.source} target="_blank">Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
  </Layout>
);

export default Projects;
