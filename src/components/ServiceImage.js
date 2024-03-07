// components/ServiceImage.js
import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 100%;
  max-height: 250px; /* Adjust the max-height as needed */
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const ServiceImage = ({ imageName, alt }) => {
  return (
    <ImageContainer>
      <Image src={`/images/${imageName}`} alt={alt} />
    </ImageContainer>
  );
};

export default ServiceImage;
