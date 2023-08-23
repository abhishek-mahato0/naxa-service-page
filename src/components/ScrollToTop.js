import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';
function ScrollToTop({ showButton }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`animate-bounce fixed bottom-8 right-8 text-blue-500 p-4 rounded-full shadow-md text-xl font-bold`}
      onClick={() => scrollToTop()}
    >
      <IoIosArrowUp />
    </div>
  );
}

export default ScrollToTop;
