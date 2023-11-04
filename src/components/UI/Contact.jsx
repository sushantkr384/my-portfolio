import React from "react";

const Contact = () => {
  return (
    <section id="contacts" className="pb-16">
      <div className="container">
        <h2 className=" text-black font-[700] text-[2.5rem] mb-8">
          Get in touch
        </h2>
        <div className="md:flex justify-between items-center">
          <div className=" w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="Description of the iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14393.
                509770240189!2d85.13363841337821!3d25.592371212279858!2m3!1f0!2f0!3f0!3m2!
                1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5884484c81cb%3A0xfae38a8a97ed5467!
                2sKankarbagh%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1695631912071!5m2!1sen!2sin"
              className="boredre-0 w-full h-full "
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8">
            <form
              action="https://formspree.io/f/mrgwywnk"
              method="POST"
              className="w-full"
            >
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  name="userName"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  name="userEmail"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="subject"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  name="userSubject"
                />
              </div>
              <div className="mb-5">
                <textarea
                  rows={3}
                  type="text"
                  placeholder="write your message"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  name="userText"
                />
              </div>

              <button
                className="w-full p-3 focous:outline-none rounded-[5px] bg-blue-400 text-white
                   hover:bg-gray-700 text-center ease-linear duration-150"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
