import React from "react";
import frontendImg from "../../assets/images/front-end.png";
const skills = [
  "JavaScript(ES6+)",
  "React.js",
  "Html/CSS",
  "Tailwind CSS ",
  "Material UI",
  "Git & Github",
];
const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-blue-500 font-[800] text-[25px] mb-5">
            What do I help
          </h2>
          <p className="lg:max-w-[600] lg:mx-auto text-blue-600 font-[500] text-[18px] leading-7">
            I design and implement visually appealing and user-friendly
            interfaces, ensuring a seamless web experience for users. This
            provides a succinct overview of your role while emphasizing both the
            design and technical aspects. Adjust based on the specifics of your
            position and the nuances of your expertise.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:max-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* ========vertical line in a middle ==============*/}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>
              {/* ========== left card============= */}

              <div className="mt-6 sm:mt-0 sm:md-12">
                <div className=" flex items-center flex-col sm:flex-row">
                  <div className="flex w-full mx-auto items-center justify-start">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group 
                                hover:bg-blue-500 cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-blue-500 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Frontend Development
                        </h3>
                        <p className=" text-[15px] text-green-900  group-hover:text-white group-hover:font-[500] leading-7">
                          I've worked in front-end web development and am
                          skilled in creating elegant animation. A well-designed
                          website showcases originality.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-full bg-slate-500 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2
                        -translate-y-4 flex sm:translate-y-0 items-center justify-center"
                  >
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ================start skills section================ */}
          <div
            // data-aos="fade-right"
            // data-aos-duration="1200"
            className=" mt-2 p-4 bg-gray-100 "
          >
            <h2 className="text-2xl font-bold mb-4 text-stone-600">
              My Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  className="p-4 border rounded shadow-sm bg-blue-600 text-[18px] font-[500] text-white"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          {/* ==============end skills section ========================*/}
        </div>
      </div>
    </section>
  );
};

export default Services;
