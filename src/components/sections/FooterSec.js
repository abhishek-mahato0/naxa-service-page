import TalkBtn from '../TalkBtn';

function FooterSec() {
  return (
    <div className="w-[95%] relative flex flex-col sm:w-[90%] sm:text-justify rounded-lg lg:w-[75%] mx-auto items-center justify-center gap-5 py-10 bg-[#0042ee] mb-10 z-20 overflow-hidden">
      <img
        src="images/bgs/fotsec.svg"
        alt="footer"
        className="absolute top-5 -left-2 w-20 h-full -z-10"
      ></img>
      <h2 className="text-[28px] font-bold text-white">
        Seeking <span className="text-[#d4bd56]">Collaboration?</span>
      </h2>
      <p className="text-white tracking-wide text-[13px] lg:w-[50%] text-center">
        We constantly look forward to exploring ideas, collaborations, and
        technical innovations. If you want to partner with us, we are just an
        email away.
      </p>
      <TalkBtn />
    </div>
  );
}

export default FooterSec;
