import React from "react";
import sushant from "../../assets/images/sushant-removebg-preview.png";
// import CountUp from "react-CountUp";
const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* =========hero left container============== */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-stone-600 font-[600] text-[16px]"
            >
              welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-stone-600 font-[800] text-[18px] sm:text-[30px] leading-[35px] sm:leading-[46px] mt-3"
            >
              Hey, I am Sushant Kumar <br />
              Web Developer
            </h1>
            <div
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button
                  className="bg-blue-500 text-white font-[500] flex items-center gap-2
                   hover:bg-blue-800 ease-in duration-300 py-2 px-4 rounded-md"
                >
                  <i className="ri-mail-line"></i> Hire Me
                </button>
              </a>
              <a
                href="#portfolio"
                className="bg-blue-500 font-[500] text-[16px] border-b border-solid border-blue-500 py-2 px-4 rounded-md"
              >
                See Portfolio
              </a>
            </div>
            <p
              data-aos-duration="1500"
              data-aos="fade-left"
              className="flex gap-2 text-blue-500 mt-14 font-[500] text-[18px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i className="ri-apps-2-line"></i>
              </span>
              My name is Sushant Kumar, and I have developed front-end websites
              for the past two years.I am capable of creating a user-friendly,
              stunning, and responsive website.
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-blue-600 text-[15px] font-[600]">
                Follow Me
              </span>
              <span className="flex gap-2">
                <a
                  href="https://twitter.com/Sushant34010369"
                  className="text-blue-500 text-[21px] font-[600]"
                >
                  <i className="ri-twitter-x-line"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100008750569389" className="text-blue-500 text-[21px] font-[600]">
                  <i className="ri-facebook-box-fill"></i>
                </a>
                <a href="https://github.com/sushantkr384" className="text-blue-500 text-[21px] font-[600]">
                  <i className="ri-github-fill"></i>
                </a>
              </span>
            </div>
          </div>

          {/* =========hero left container end============== */}

          {/* =========hero img============== */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={sushant} alt="" />
            </figure>
          </div>
          {/* =========hero img end============== */}

          {/* =========hero content right============== */}

          <div
            className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3
           md:mt-0 md:flex-col md:justify-end md:text-end"
          >
            <div className="mb-10">
              {/* <h2 className="text-blue-500 font-[700] text-[32px]">
                <CountUp start={0} end={2} suffix="+" />
              </h2> */}
              <h4 className="text-blue-500 font-[600] text-[18px]">
                2 years of experience
              </h4>
            </div>
          </div>

          {/* =========hero content right end============== */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
