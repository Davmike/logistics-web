import logo from "../../public/assets/logo.png";

function Home() {
  return (
    <div
      id="home"
      className="relative text-white min-h-screen flex flex-col items-center justify-center md:items-start px-[15px]"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      {/* Logo */}
      <div className="absolute top-4">
        <img src={logo} className="w-[100px] h-[100px]" alt="Logo" />
      </div>

      {/* Centered Text */}
      <div className="relative z-10 text-center mt-[55px] md:text-left md:w-[400px] lg:w-[600px]">
        <h1 className="text-[32px] font-bold lg:text-[50px]">
          CONNECT YOUR BUSINESS TO
          <span className="text-[#f15f22]"> kptrans </span>
          FOR MORE POSSIBILITIES
        </h1>
      </div>
      {/* line */}
      <div className="w-[50px] h-[1px] bg-[white] mt-[10px] z-10"></div>
      {/* FOR MORE INFO */}
      <div className="z-10 mt-[10px] flex justify-center items-center flex-col md:items-start">
        <p className="text-[#c4c4c4] mt-[10px] lg:text-[23px]">
          For More Information Click Below
        </p>
        <button className="px-[10px] py-[8px] bg-[#f15f22] mt-[10px] lg:px-[14px] lg:py-[12px]">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Home;
