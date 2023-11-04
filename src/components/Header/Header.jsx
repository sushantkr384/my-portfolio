import { useRef, useEffect } from "react";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const sticky = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };
  useEffect(() => {
    sticky();
    return window.removeEventListener("scroll", sticky);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex items-center"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* we are putting a logo here */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-slate-600 rounded-full flex items-center justify-center text-white text-[20px] font-[750]">
              S
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-sky-indigo-500 font-[750]">
                SUSHANT
              </h2>
              <p className="text-indigo-500 text-[18px]">Personal</p>
            </div>
          </div>
          {/* logo end here */}

          {/* menu start */}

          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a className="text-stone-600 font-[600]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-stone-600 font-[600]" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="text-stone-600 font-[600]" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="text-stone-600 font-[600]" href="#contacts">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* menu end */}

          {/* menu right Side */}
          <div className="flex items-center gap-4">
            <button
              className="flex items-center gap-2  font-[600] border border-solid border-black py-2 px-4 rounded-md max-h-[40px]
              bg-zinc-700 hover:text-white , hover:font-[500] ease-in duration-300"
            >
              <i className="ri-send-plane-fill"></i>
              let's talk
            </button>
            <span
              onClick={toggleMenu}
              className="text-2xl text-stone-600 md:hidden cursor-pointer"
            >
              <i className="ri-menu-3-fill" />
            </span>
          </div>
          {/* menu right Side end*/}
          {/* menu left side */}
        </div>
      </div>
    </header>
  );
};
export default Header;
