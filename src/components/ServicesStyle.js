// components/ServicesStyles.js
import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: #eee;
  text-align: center;
  margin-bottom: 1rem;
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
`;

export const ServiceCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  padding: 2rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ServiceTitle = styled.h2`
  font-size: 3.0rem;
  color: #eee;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const ServiceDescription = styled.p`
  font-size: 2.0rem;
  color: #ccc;
  line-height: 1.5;
`;

// Add more styles as needed for your Services page
