import React from "react";
import Portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeID, setShoeModal }) => {
  const portfolio = Portfolios.find((portfolio) => portfolio.id === activeID);
  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-black bg-opacity-40">
      <div className="md:max-w-[600px]  absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform-translate-x-1/2 -translate-y-1/2 p-5">
        <div>
          <figure>
            <img src={portfolio.imgUrl} alt="" />
          </figure>
        </div>

        <div>
          <h2 className="text-2xl text-black font-[700] my-5">
            {portfolio.title}
          </h2>

          <p className="text-[15px] leading-7 text-green-600">
            {portfolio.description}
          </p>

          <div className="flex mt-[5] items-center gap-3 flex-wrap">
            <h4 className="text-[20px] text-black text-[800]">
              technologies :
            </h4>

            {portfolio.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-black py-1 px-2 
              rounded-[5px] text-[14px] leading-1"
              >
                {item}
              </span>
            ))}
          </div>

          <a href={portfolio.siteUrl}>
            <button
              className="bg-blue-500 text-white py-2 px-4 my-8 rounded-[8px] font-[500] hover:bg-green-900 ease-in
              duration-300"
            >
              Live site
            </button>
          </a>
        </div>

        <button
          onClick={() => setShoeModal(false)}
          className="w-[1.8rem] h-[1.8rem] bg-black absolute top-[1.7rem] right-[1.7rem] text-[25px]
             flex items-center justify-center rounded-[3px] cursor-pointer"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
