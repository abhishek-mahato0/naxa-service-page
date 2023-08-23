import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import PortCard from '../HoverCards/PortCard';
import CompanyCard from '../HoverCards/CompanyCard';
import EvMedCard from '../HoverCards/EvMedCard';
import { RiCloseFill } from 'react-icons/ri';
//   this is the nav for smaller devices
function SmallDeviNav({ setShowMob }) {
  return (
    <div className="w-[60%] flex flex-col text-[13.5px] gap-10 text-sm font-normal absolute top-0 right-0 z-10 bg-[#ffdc1c] h-screen pt-10">
      <div className="text-blue-800 font-[400] text-4xl flex justify-end w-full">
        <RiCloseFill onClick={() => setShowMob((ele) => !ele)} />
      </div>

      <div className="flex items-center justify-start px-10">
        <a href="/">Services</a>
      </div>
      <div className="flex group relative items-center justify-between px-10 gap-2 ">
        <a href="/">Portfolio </a>
        <IoMdArrowDropdown className="group-hover:hidden" />
        <IoMdArrowDropup className="hidden group-hover:flex" />
        <PortCard />
      </div>
      <div className="flex group relative items-center justify-between px-10 gap-2">
        <a href="/">Company</a>
        <IoMdArrowDropdown className="group-hover:hidden" />
        <IoMdArrowDropup className="hidden group-hover:flex" />
        <CompanyCard />
      </div>
      <div className="flex group relative items-center justify-between px-10 gap-2">
        <a href="/">Event & Media</a>
        <IoMdArrowDropdown className="group-hover:hidden" />
        <IoMdArrowDropup className="hidden group-hover:flex" />
        <EvMedCard />
      </div>

      <a href="/" className="flex items-center justify-start px-10">
        Blogs
      </a>
    </div>
  );
}

export default SmallDeviNav;
