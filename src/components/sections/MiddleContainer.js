function MiddleContainer() {
  return (
    <div className="flex flex-col w-[95%] mx-[10px] mt-10 items-center justify-start lg:w-3/5 lg:ml-[95px] lg:mt-[120px] ">
      <img
        src="images/bgs/crou.jpg"
        alt="crou"
        className="absolute top-0 -right-[10px] -z-10 h-[500px] w-[70%]"
      ></img>
      <p className="w-full ml-20 flex items-center justify-start text-[#ffab00] text-[14px] mb-[25px] font-bold">
        SERVICES
      </p>
      <h1 className="text-[40px] font-[400] tracking-wide lg:w-[90%]">
        At <span className="text-[#124af4]">NAXA</span>, we work on{' '}
        <span className="text-[#124af4]">ideas</span>; ideas that can provide{' '}
        <span className="text-[#124af4]">simple solutions</span> to{' '}
        <span className="text-[#124af4]">complex problems</span>.
      </h1>

      <p className="flex w-full text-sm font-[400] leading-6 mt-[40px] mb-[30px] lg:w-[80%] -ml-20">
        We work as a team to generate, explore, build and validate ideas. We
        also contextualize innovations around the world to find the best fitting
        solutions to local problems.
      </p>
    </div>
  );
}

export default MiddleContainer;
