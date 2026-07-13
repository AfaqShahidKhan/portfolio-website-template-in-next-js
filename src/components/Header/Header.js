import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { DiCssdeck } from "react-icons/di";
import { useMediaQuery } from "react-responsive";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Container>
      <Div1>
        <Link
          href="/#header"
          style={{
            display: "flex",
            alignItems: "center",
            color: "var(--text, #333)",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="/#header">
            <NavLink>Home</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        {isClient && !isMobile && (
          <li>
            <Link href="/#tech">
              <NavLink>Technologies</NavLink>
            </Link>
          </li>
        )}
        <li>
          <Link href="/#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Mohsin" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.linkedin.com/in/afaq-shahid-khan"
          target="_blank"
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/mohsin" target="_blank">
          <FaSquareXTwitter size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
