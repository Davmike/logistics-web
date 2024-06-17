import { useEffect } from "react";
import logo from "../../public/assets/logo.png";
import ScrollReveal from "scrollreveal";
import { Link } from "react-scroll";

function Home() {
  // on scroll show component smooth effect
  useEffect(() => {
    const config = {
      origin: "top",
      distance: "50px",
      duration: 1000,
      delay: 300,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
    };

    ScrollReveal().reveal("#reset", config);
  }, []);

  return (
    <div
      id="home"
      className="relative text-white min-h-screen flex flex-col items-center justify-center md:items-start px-[15px]"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      {/* Logo */}
      <div className="absolute top-4" id="reset">
        <img src={logo} className="w-[100px] h-[100px]" alt="Logo" />
      </div>

      {/* Centered Text */}
      <div
        className="relative z-10 text-center mt-[55px] md:text-left md:w-[400px] lg:w-[600px]"
        id="reset"
      >
        <h1 className="text-[32px] font-bold lg:text-[50px]">
          CONNECT YOUR BUSINESS TO
          <span className="text-[#f15f22]"> kptrans </span>
          FOR MORE POSSIBILITIES
        </h1>
      </div>
      {/* line */}
      <div
        className="w-[50px] h-[1px] bg-[white] mt-[10px] z-10"
        id="reset"
      ></div>
      {/* FOR MORE INFO */}
      <div
        className="z-10 mt-[10px] flex justify-center items-center flex-col md:items-start"
        id="reset"
      >
        <p className="text-[#c4c4c4] mt-[10px] lg:text-[23px]">
          For More Information Click Below
        </p>
        <Link to={"about"} spy={true} smooth={true} offset={0} duration={500}>
          <button
            className="px-[10px] py-[8px] bg-[#f15f22] mt-[10px] lg:px-[14px] lg:py-[12px] hover:bg-[white] hover:text-[#f15f22] duration-300 ease-in-out"
            id="reset"
          >
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
