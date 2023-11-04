import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-700 pt-12">
      {/* =============  top=============== */}

      <div className="container">
        <div className="sm:flex items-start justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want make beautiful products
            </h2>
            <a href="#contact">
              <button
                className="bg-blue-500 text-white font-[500] flex items-center gap-2
                   hover:bg-blue-800 ease-in duration-300 py-2 px-4 rounded-md"
              >
                <i className="ri-mail-line"></i> Hire Me
              </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2 ">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              I create user-friendly, responsive, and quick websites. I'm a web
              developer that enjoys experimenting with new frameworks and
              technologies, so let's work together to create something
              incredible. Let's collaborate to produce something original and
              thrilling.
            </p>
            <div className="flex items-center  gap-4 flex-wrap md:gap-8 mt-10 ">
              <span className="text-gray-300 font-[600] text-[15px]">
                Follow me
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://github.com/sushantkr384"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i className="ri-github-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://www.facebook.com/people/Sushant-Kumar/pfbid0345Uf9nJdSApT4Ls8PP3V4cAAXLdAUQoJ2tC8F2hMAh1tq7nUgEWJ6yRLfBvyiGqwl/"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i className="ri-facebook-box-fill"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://twitter.com/Sushant34010369"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i className="ri-twitter-x-fill"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://instagram.com/sushant8795?igshid=OGQ5ZDc2ODk2ZA=="
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i className="ri-instagram-fill"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-10 mt-10">
            <li className="text-gray-400  font-[600]">
              {" "}
              <a href="#about">About</a>
            </li>
            <li className="text-gray-400 font-[600]">
              {" "}
              <a href="#services">Services</a>
            </li>
            <li className="text-gray-400  font-[600]">
              {" "}
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="text-gray-400  font-[600]">
              {" "}
              <a href="contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      {/* =============  bottom=============== */}

      <div className="bg-gray-900 py-3 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span
                  className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-orange-400 font-[500] text-[18px]
                   flex items-start justify-center"
                >
                  S
                </span>

                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[18px]">
                    Sushant
                  </h2>
                  <p className="text-gray-400 text-[14px] font-[500]">
                    Private
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <p className="text-orange-600 text-[14px]">
                copyright 2023 by Sushant -All right reserved..
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* =============  bottom end============ */}
    </footer>
  );
};

export default Footer;
