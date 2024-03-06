import styled from 'styled-components';

export const ScrollToTopButtonStyled = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #87CEEB;
  color: #fff;
  border: none;
  border-radius: 50%; 
  width: 40px; 
  height: 40px; 
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  z-index: 999;
  transition: background-color 0.3s; 
  &:hover {
    background-color: black;
  }
`;
