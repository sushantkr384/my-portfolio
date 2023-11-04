import React, { useEffect, useState } from "react";
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolio, setPortfolio] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  useEffect(() => {
    if (selectTab === "all") {
      setPortfolio(data);
    }
    if (selectTab === "web-design") {
      const filterData = data.filter((item) => item.category === "Web Design");
      setPortfolio(filterData);
    }

    if (selectTab === "ux-design") {
      const filterData = data.filter((item) => item.category === "Ux");
      setPortfolio(filterData);
    }
  }, [selectTab]);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className=" text-[2rem] font-[700]">
              MY Recent Projects
            </h3>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setSelectTab("all")}
              className=" border border-solid border-[#f0edab] py-2 px-4 rounded-[9px]"
            >
              All
            </button>
            <button
              onClick={() => setSelectTab("web-design")}
              className=" border border-solid border-[#f0edab] py-2 px-4 rounded-[9px]"
            >
              Web Design
            </button>
            <button
              onClick={() => setSelectTab("ux-design")}
              className=" border border-solid border-[#f0edab] py-2 px-4 rounded-[9px]"
            >
              UX-Design
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-12">
          {portfolio?.slice(0, nextItems)?.map((portfolio, index) => (
            <div
              key={index}
              className="group max-w-full sm-w-[48.5%] md:w-[32.2%] relative lg:w-[32.2%] z-[1]"
            >
              <figure>
                <img className="rounded-[8px]" src={portfolio.imgUrl} alt="" />
              </figure>

              <div className="w-full h-full bg-blue-500 bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(portfolio.id)}
                    className="text-white bg-black hovering:bg-blue-500 py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                  >
                    see details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          {nextItems < portfolio.length && data.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-black hover:bg-blue-500 py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
            >
              Load More
            </button>
          )}
        </div>
      </div>
      {showModal && <Modal setShoeModal={setShowModal} activeID={activeID} />}
    </section>
  );
};

export default Portfolio;
