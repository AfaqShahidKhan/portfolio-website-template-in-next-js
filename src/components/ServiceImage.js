// components/ServiceImage.js
import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  max-height: 400px; /* Adjust the max-height as needed */
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const ServiceImage = ({ imageName, alt }) => {
  return <Image src={`/images/${imageName}`} alt={alt} />;
};

export default ServiceImage;
