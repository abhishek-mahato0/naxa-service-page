function CompanyCard() {
  return (
    <div className="absolute top-10 left-1 hidden flex-col w-[300px] shadow-2xl group-hover:flex z-20 bg-white">
      <a
        href="/"
        className="flex items-center justify-start h-[50%] w-full px-6 hover:bg-[#ffe44f] py-2 gap-2"
      >
        <img
          src="images/licon.jpg"
          alt="aboutus"
          className="w-[20px] h-full"
        ></img>
        About us
      </a>
      <a
        href="/"
        className="flex items-center h-[50%] hover:bg-[#ffe44f] w-full px-6 py-2 gap-2"
      >
        <img src="images/team.svg" alt="publication" className="h-[28px]"></img>
        Team
      </a>
      <a
        href="/"
        className="flex items-center h-[50%] w-full px-6 hover:bg-[#ffe44f] py-2 gap-2"
      >
        <img
          src="images/hand.png"
          alt="publication"
          className="h-[28px] w-[28px]"
        ></img>
        Work with us
      </a>
      <a
        href="/"
        className="flex items-center h-[50%] hover:bg-[#ffe44f] w-full px-6 py-2 gap-2"
      >
        <img
          src="images/awards.svg"
          alt="publication"
          className="h-[28px]"
        ></img>
        Awards and Achievements
      </a>
    </div>
  );
}

export default CompanyCard;
