function PortCard() {
  return (
    <div className="absolute top-12 left-1 hidden flex-col w-[300px] shadow-2xl group-hover:flex z-20 bg-white">
      <a href="/" className="h-[50%] w-full px-6 hover:bg-[#ffe44f] py-2">
        General
      </a>
      <a href="/" className="h-[50%] hover:bg-[#ffe44f] w-full px-6 py-2">
        International
      </a>
    </div>
  );
}

export default PortCard;
