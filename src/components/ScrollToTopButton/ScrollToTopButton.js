import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { ScrollToTopButtonStyled } from './ScrollToTopButtonStyles';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <ScrollToTopButtonStyled
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <FaArrowUp />
    </ScrollToTopButtonStyled>
  );
};

export default ScrollToTopButton;
