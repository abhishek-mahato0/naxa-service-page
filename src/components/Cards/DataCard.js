import React from 'react';

function DataCard({ ele, ind }) {
  const cleanDescription1 = ele.description1.replace(/<\/?p>/g, '');
  const cleanDescription2 = ele.description2.replace(/<\/?p>/g, '');
  return (
    <div
      className="lg:flex lg:w-[80%] mx-auto mt-5 lg:pt-20 pt-10 gap-10 w-[90%]"
      id={ele.id}
    >
      {/* giving condition for rendering image to the left side and descriptions to right  */}
      {ind % 2 === 0 ? (
        <>
          <div className="lg:w-[50%] w-[90%]">
            <img
              src={ele.icon}
              alt={ele.title}
              className="w-[480px] h-[590px]"
            ></img>
          </div>
          <div
            className="flex flex-col justify-start items-start gap-5 lg:w-[50%] w-[90%] mx-auto"
            style={{
              backgroundImage: ind === 0 && `url('images/bgs/linebg1.svg')`,
            }}
          >
            <img
              src={ele.photo}
              alt={ele.title}
              className="w-[50px] h-[50px]"
            ></img>
            <h1 className="text-[24px]">{ele.title}</h1>
            <p className="text-[12.56px]">{cleanDescription1}</p>
            <p className="text-[12.56px] bg-[#E9EBFF] p-8 leading-5 tracking-wide min-w-[100%]">
              {cleanDescription2}
            </p>
          </div>
        </>
      ) : (
        <>
          {/* giving condition for rendering image to the right side and descriptions to left  */}
          <div
            className="flex flex-col justify-start items-start gap-5 lg:w-[50%] w-[90%]"
            style={{
              backgroundImage: ind === 1 && `url('images/bgs/linebg1.svg')`,
            }}
          >
            <img
              src={ele.photo}
              alt={ele.title}
              className="w-[50px] h-[50px]"
            ></img>
            <h1 className="text-[24px]">{ele.title}</h1>
            <p className="text-[12.56px]">{cleanDescription1}</p>
            <p className="text-[12.56px] bg-[#E9EBFF] p-8 leading-5 tracking-wide min-w-[100%]">
              {cleanDescription2}
            </p>
          </div>
          <div className="lg:w-[50%] w-[90%]">
            <img
              src={ele.icon}
              alt={ele.title}
              className="w-[480px] h-[590px]"
            ></img>
          </div>
        </>
      )}
    </div>
  );
}

export default DataCard;
