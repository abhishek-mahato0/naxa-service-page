import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import PortCard from '../HoverCards/PortCard';
import CompanyCard from '../HoverCards/CompanyCard';
import EvMedCard from '../HoverCards/EvMedCard';
import TalkBtn from '../TalkBtn';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import SmallDeviNav from './SmallDeviNav';
function Navbar() {
  const [showMob, setShowMob] = useState(false);
  return (
    <div className="w-[95%] h-[50px] flex mx-[21.5px] items-center justify-between pr-5">
      <div className="w-[30%] h-full flex tems-center justify-center">
        <a href="/" className="w-full flex items-center justify-center gap-1">
          <img
            src="images/logo.jpg"
            alt="logo"
            className="w-[110px] h-full"
          ></img>
        </a>
      </div>
      <div className="w-[50%] lg:flex text-[13.5px] justify-between items-center gap-10 text-sm font-normal sm:hidden hidden h-full">
        <div className="flex">
          <a href="/">Services</a>
        </div>
        <div className="flex group relative items-center justify-center gap-2 h-full">
          <a href="/">Portfolio </a>
          <IoMdArrowDropdown className="group-hover:hidden" />
          <IoMdArrowDropup className="hidden group-hover:flex" />
          {/* hovercard */}
          <PortCard />
        </div>
        <div className="flex group relative items-center justify-center gap-2 h-full">
          <a href="/">Company</a>
          <IoMdArrowDropdown className="group-hover:hidden" />
          <IoMdArrowDropup className="hidden group-hover:flex" />
          {/* hovercard */}
          <CompanyCard />
        </div>
        <div className="flex group relative items-center justify-center gap-2 h-full">
          <a href="/">Event & Media</a>
          <IoMdArrowDropdown className="group-hover:hidden" />
          <IoMdArrowDropup className="hidden group-hover:flex" />
          {/* hovercard */}
          <EvMedCard />
        </div>

        <a href="/">Blogs</a>
      </div>
      <TalkBtn />
      {/* this is for smaller devices */}
      <GiHamburgerMenu
        className="lg:hidden flex h-full items-center justify-center text-2xl"
        onClick={() => setShowMob((ele) => !ele)}
      />
      {showMob && <SmallDeviNav setShowMob={setShowMob} />}
    </div>
  );
}

export default Navbar;
