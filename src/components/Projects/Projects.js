import React, { useEffect, useRef } from "react";

import {
  StyledProject,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ExternalLinks,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Project = ({ title, description, tags, image, visit }) => {
  const mediaContainerRef = useRef(null);

  const isInView = () => {
    if (mediaContainerRef.current) {
      const rect = mediaContainerRef.current.getBoundingClientRect();
      return rect.top >= -100 && rect.bottom <= window.innerHeight + 100;
    }
    return false;
  };

  const handleTab = (e) => {
    if (e.key === 'Tab') {
      mediaContainerRef.current.classList.add('in-view');
    }
  };

  const userIsTabbing = () => {
    if (document && document.body.classList.contains('user-is-tabbing')) {
      return true;
    }
    return false;
  };

  const toggleInViewClass = () => {
    if (isInView() && !userIsTabbing()) {
      mediaContainerRef.current.classList.add('in-view');
    }
  };

  const scrollHandler = () => {
    toggleInViewClass();
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('keydown', handleTab);
    toggleInViewClass();
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

  return (
    <StyledProject>
      <div className="content">
        <div className="text">
          <HeaderThree $title>{title}</HeaderThree>
          <Hr />
          <p>{description}</p>
          {tags && tags.length ? (
            <TagList>
              {tags.map((t, i) => (
                <Tag key={i}>{t}</Tag>
              ))}
            </TagList>
          ) : null}
          <UtilityList>
            <ExternalLinks href={visit} target="_blank">
              Visit site &nbsp;&rarr;
            </ExternalLinks>
          </UtilityList>
        </div>
      </div>
      <a className="preview" ref={mediaContainerRef} href={visit} target="_blank">
        <Img alt={title} src={image} />
      </a>
    </StyledProject>
  );
};

const Projects = () => (
  <Section $nopadding id="projects">
    <SectionDivider />
    <SectionTitle $main>My Work</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => (
        <Project key={i} {...p} />
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
