import React from 'react';
function EvMedCard() {
  return (
    <div className="absolute top-12 left-1 hidden flex-col w-[300px] shadow-2xl group-hover:flex bg-white z-20">
      <a
        href="/"
        className="flex items-center h-[50%] hover:bg-[#ffe44f] w-full px-6 py-2 gap-2"
      >
        <img src="images/cal.svg" alt="publication" className="h-[28px]"></img>
        Events
      </a>
      <a
        href="/"
        className="flex items-center h-[50%] w-full px-6 hover:bg-[#ffe44f] py-2 gap-2"
      >
        <img src="images/news.svg" alt="publication" className="h-[28px]"></img>
        Media
      </a>
      <a
        href="/"
        className="flex items-center h-[50%] hover:bg-[#ffe44f] w-full px-6 py-2 gap-2"
      >
        <img
          src="images/publi.svg"
          alt="publication"
          className="h-[28px]"
        ></img>
        Publications
      </a>
    </div>
  );
}

export default EvMedCard;
