import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call:</LinkTitle>
          <LinkItem href="+92 349 4771617">+92 349 4771617</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email:</LinkTitle>
          <LinkItem href="afaqshahidk@gmail.com">afaqshahidk@gmail.com</LinkItem>
        </LinkColumn>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>Inovating one project at a time</Slogan>
          </CompanyContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com/AfaqShahidKhan" target="_blank">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/afaq-shahid-khan" target="_blank">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://twitter.com/afaqshahidkhan" target="_blank">
              <AiFillTwitterCircle size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
