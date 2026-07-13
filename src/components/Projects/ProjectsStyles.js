import styled from 'styled-components';

export const StyledProject = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1110px) {
    flex-direction: column-reverse;
    max-width: 740px;
  }

  &:not(:last-of-type) {
    margin-bottom: 8rem;

    @media ${(props) => props.theme.breakpoints.md} {
      margin-bottom: 15rem;
    }
  }

  .preview {
    display: flex;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.5s;
    transform: translateY(5rem);
    opacity: 0;

    @media (max-width: 1110px) {
      margin-bottom: 4.5rem;
    }

    @media (min-width: 1110px) {
      flex: 0 0 65%;
    }

    img,
    video {
      width: 100%;
      height: 100%;
  
      @media(max-width: 1240px) {
        object-fit: cover;
      }
      
    }

    &:hover {
      transform: scale3d(1.025, 1.025, 1.025);
    }
  }

  .in-view {
    transform: translateY(0);
    opacity: 1;
  }

  .content {
    @media (min-width: 1110px) {
      display: flex;
      align-items: center;
      flex: 1;
      padding-right: 5rem;
    }
  }

  ul {
    font-size: 80%;
    list-style: initial;
    list-style-position: inside;
    font-family: 'Space Grotesk', sans-serif;
    margin-bottom: 2rem;
  }

  .links {
    display: flex;
    align-items: center;
  }

  .repo {
    transition: 0.2s;
    &:hover,
    &:focus {
      transform: scale(1.1);
    }
  }

  .githubmark {
    display: block;
    height: 2.6rem;
    margin: 0 2rem;
  }

  p {
    margin: 2rem 0;
    font-size: 2rem;
    max-width: 540px;
    color: ${(props) => props.theme.colors.text};

    @media (min-width: 1280px) {
      font-size: 2.1rem;
      line-height: 1.5;
    }

    @media(max-width: 1240px) {
      font-size: 2rem;
    }
  }
`;

export const GridContainer = styled.section`
  display: block;
  padding: 3rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem;
    padding-bottom: 0;
  }
`;

export const TitleContent = styled.div`
  text-align: left;
  z-index: 20;
  width: 100%;
  margin-bottom: 0.8rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.text};
  padding: 0.5rem 0;
  font-size: ${(props) => props.$title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px 0;
  border: 0;
  background: ${(props) => props.theme.colors.accent1};
`;

export const CardInfo = styled.p`
  width: 100%;
  color: ${(props) => props.theme.colors.text};
  line-height: 24px;
  text-align: justify;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.colors.accent1};
  font-size: 1.9rem;
  padding: 0.3rem 2rem;
  border-radius: 10rem;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.accent1};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: all 0.2s;
  font-family: 'Space Grotesk', sans-serif;
  text-decoration: none;

  &:hover,
  &:focus {
    background: ${(props) => props.theme.colors.text};
    border-color: ${(props) => props.theme.colors.text};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    outline: none;
    text-decoration: none;
    transform: translateY(-0.1rem);
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 2rem 0;
  margin-top: 0.5rem;
`;

export const Tag = styled.li`
  color: ${(props) => props.theme.colors.textLight};
  font-size: 1.5rem;
  margin-right: 1.5rem;
  margin-bottom: 0.5rem;
  list-style: none;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;
