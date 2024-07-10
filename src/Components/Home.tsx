import { useContext, useEffect } from "react";
import logo from "../../public/assets/logo.png";
import ScrollReveal from "scrollreveal";
import { Link } from "react-scroll";
import en from "../../public/assets/us.svg";
import ge from "../../public/assets/ge.svg";
import { MyContext } from "./Context";

function Home() {
  const context = useContext(MyContext);
  const { changeLanguage, setChangeLanguage }: any = context;

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

      {/* language section */}
      <div className="absolute top-4 right-[20px] flex gap-[5px]">
        <img
          src={en}
          className="w-[15px] h-[15px] cursor-pointer hover:scale-125 transition-transform duration-500"
          alt=""
          onClick={() => {
            setChangeLanguage("ENG");
          }}
        />
        <img
          src={ge}
          className="w-[15px] h-[15px] cursor-pointer hover:scale-125 transition-transform duration-500"
          alt=""
          onClick={() => {
            setChangeLanguage("GEO");
          }}
        />
      </div>

      {/* Logo */}
      <div className="absolute top-4" id="reset">
        <img src={logo} className="w-[140px] h-[140px]" alt="Logo" />
      </div>

      {/* Centered Text */}
      <div
        className="relative z-10 text-center mt-[55px] md:text-left md:w-[400px] lg:w-[600px]"
        id="reset"
      >
        <h1 className="text-[32px] font-bold lg:text-[50px]">
          {changeLanguage === "ENG"
            ? "CONNECT YOUR BUSINESS TO"
            : "დააკავშირეთ თქვენი ბიზნესი"}
          <span className="text-[#f15f22]"> kptrans </span>
          {changeLanguage === "ENG"
            ? "FOR MORE POSSIBILITIES"
            : "მეტი შესაძლებლობისთვის"}
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
          {changeLanguage === "ENG"
            ? "For More Information Click Below"
            : "დამატებითი ინფორმაციისთვის დააკლიკეთ ქვემოთ"}
        </p>
        <Link to={"about"} spy={true} smooth={true} offset={0} duration={500}>
          <button
            className="px-[10px] py-[8px] bg-[#f15f22] mt-[10px] lg:px-[14px] lg:py-[12px] hover:bg-[white] hover:text-[#f15f22] duration-300 ease-in-out"
            id="reset"
          >
            {changeLanguage === "ENG" ? "Learn More" : "გაიგეთ მეტი"}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
