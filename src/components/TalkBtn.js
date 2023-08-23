import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
function TalkBtn() {
  return (
    <div className="flex w-[30%] items-center justify-center ">
      <a
        href="/"
        className="group text-[#0055fe] text-[11.6px] flex gap-2 items-center justify-center w-[140px] h-[34px] bg-[#ffdc1c] hover:bg-[#ffab00] hover:text-[0055fe]"
      >
        Let's Talk
        <AiOutlineArrowRight className="!text-[15px] !font-bolder hidden duration-300 group-hover:block" />
      </a>
    </div>
  );
}

export default TalkBtn;
