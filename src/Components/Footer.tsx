import location from "../../public/assets/location.png";
import gmail from "../../public/assets/gmail.png";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Footer() {
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

  const categories = [
    { title: "Tbilisi, The Area Around The Gez", src: location },
    { title: "info@kptrans.ge", src: gmail },
  ];

  return (
    <div className="bg-[#030D11] px-[15px] pt-[80px] pb-[50px]">
      <h2
        className="text-[white] font-bold text-[25px] mb-[20px] md:text-[30px] lg:text-[35px]"
        id="reset"
      >
        We Understand The Importance Approaching Each Work!
      </h2>
      {/* div for mobile numbers */}
      <div className="flex flex-col" id="reset">
        <span className="text-[#F15F22] font-bold text-[25px] md:text-[30px] lg:text-[35px]">
          +995 558 08 90 50
        </span>
        <span className="text-[#F15F22] font-bold text-[25px] md:text-[30px] lg:text-[35px]">
          +995 571 57 79 99
        </span>
      </div>
      <p
        className="text-[white] text-[18px] font-normal mt-[25px] lg:text-[22px]"
        id="reset"
      >
        CONTACT US
      </p>
      <hr className="h-[1px] mt-[25px]" id="reset" />
      {/* who we are?! */}
      <div id="reset">
        <h3 className="text-[#c4c4c4] mt-[25px] lg:text-[21px]">
          We're here to help! At KPTrans, we offer top-notch services and are
          eager to work with you. Contact us today!
        </h3>
      </div>
      {/* soc media info */}
      {categories.map((category, index) => {
        return (
          <div
            key={index}
            className="flex items-center gap-[10px] mt-[20px]"
            id="reset"
          >
            <img src={category.src} alt="" />
            <p className="text-[#868c98] lg:text-[21px]">{category.title}</p>
          </div>
        );
      })}
      {/* copyright */}
      <div
        className="flex justify-center items-center flex-col mt-[50px]"
        id="reset"
      >
        <p className="text-[#bbbcbc] text-[16px] font-light lg:text-[21px]">
          ©Copyright wL All Right Reserved
        </p>
        <p className="text-[#bbbcbc] text-[16px] font-light lg:text-[21px]">
          Made by{" "}
          <a href="https://www.weblance.ge/" target="_blank">
            <span className="text-[#F15F22]">@webLance</span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
