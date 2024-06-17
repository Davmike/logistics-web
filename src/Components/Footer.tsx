import location from "../../public/assets/location.png";
import gmail from "../../public/assets/gmail.png";

function Footer() {
  const categories = [
    { title: "Example Street 01", src: location },
    { title: "example@gmail.com", src: gmail },
  ];

  return (
    <div className="bg-[#030D11] px-[15px] pt-[80px] pb-[50px]">
      <h2 className="text-[white] font-bold text-[25px] mb-[20px]">
        We Understand The Importance Approaching Each Work!
      </h2>
      <span className="text-[#F15F22] font-bold text-[25px]">
        +995 555 444 333
      </span>
      <p className="text-[white] text-[18px] font-normal mt-[25px]">
        CONTACT US
      </p>
      <hr className="h-[1px] mt-[25px]" />
      {/* who we are?! */}
      <div>
        <h3 className="text-[#c4c4c4] mt-[14px]">
          We're here to help! At KPTrans, we offer top-notch services and are
          eager to work with you. Contact us today!
        </h3>
      </div>
      {/* soc media info */}
      {categories.map((category, index) => {
        return (
          <div key={index} className="flex items-center gap-[10px] mt-[20px]">
            <img src={category.src} alt="" />
            <p className="text-[#868c98]">{category.title}</p>
          </div>
        );
      })}
      {/* copyright */}
      <div className="flex justify-center items-center flex-col mt-[50px]">
        <p className="text-[#bbbcbc] text-[16px] font-light">
          ©Copyright wL All Right Reserved
        </p>
        <p className="text-[#bbbcbc] text-[16px] font-light">
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
