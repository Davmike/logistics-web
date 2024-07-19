import truck from "../../public/assets/truck.png";
import ship from "../../public/assets/ship.png";
import airplane from "../../public/assets/airplane.png";
import container from "../../public/assets/container.jpg";
import ScrollReveal from "scrollreveal";
import { useContext, useEffect } from "react";
import { MyContext } from "./Context";

function About() {
  const context = useContext(MyContext);
  const { changeLanguage }: any = context;

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

    ScrollReveal().reveal("#about", config);
  }, []);

  const categories = [
    {
      title: { en: "Land Transport", ka: "სახმელეთო ტრანსპორტი" },
      text: { en: "lorem ipsum 1", ka: "ლორემ იპსუმ 1" },
      src: truck,
    },
    {
      title: { en: "Ship Transport", ka: "საზღვაო ტრანსპორტი" },
      text: { en: "lorem ipsum 2", ka: "ლორემ იპსუმ 2" },
      src: ship,
    },
    {
      title: { en: "Air Transport", ka: "საჰაერო ტრანსპორტი" },
      text: { en: "lorem ipsum 3", ka: "ლორემ იპსუმ 3" },
      src: airplane,
    },
  ];

  return (
    <div id="about">
      <div className="px-[15px] mt-[30px] flex justify-center items-center flex-col">
        <h2 className="text-[25px] font-semibold text-[#2c234d]">
          {changeLanguage === "ENG"
            ? "Why Clients Choose Us"
            : "რატომ გვირჩევს კლიენტი ჩვენ"}
        </h2>
        <div className="w-[50px] h-[1px] bg-[#f15f22]"></div>
      </div>

      <div className="py-[40px] px-[15px] flex flex-col justify-center items-center lg:flex-row gap-y-[30px] md:justify-center md:gap-[50px]">
        {/* here start litle services */}
        {categories.map((category, index) => {
          return (
            // main div
            <div
              key={index}
              className="flex px-[23px] w-[250px] lg:w-[400px] items-center bg-[white] py-[25px] rounded-[10px] lg:justify-center lg:items-center"
            >
              {/* div for only images */}
              <div>
                <img
                  src={category.src}
                  className="w-[40px] h-[40px] md:w-[44px] md:h-[44px]"
                  alt=""
                />
              </div>
              {/* div for only texts */}
              <div className="pl-[15px]">
                <h3 className="text-[#2c234d] text-[11px] font-semibold lg:text-[20px]">
                  {changeLanguage === "ENG"
                    ? category.title.en
                    : category.title.ka}
                </h3>
                <p className="text-[#677294] text-[16px] font-normal lg:text-[22px]">
                  {changeLanguage === "ENG"
                    ? category.text.en
                    : category.text.ka}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* about section */}
      <div className="lg:flex lg:justify-center lg:items-center lg:gap-[40px] lg:mb-[50px] lg:mt-[50px]">
        <div className="flex justify-center items-center">
          <img src={container} alt="" />
        </div>
        <div className="px-[15px] mb-[50px]">
          <div className="px-[15px] mt-[30px] flex justify-center items-center flex-col">
            <h2 className="text-[25px] font-semibold text-[#2c234d]">
              {changeLanguage === "ENG" ? "ABOUT US" : "ჩვენს შესახებ"}
            </h2>
            <div className="w-[50px] h-[1px] bg-[#f15f22]"></div>
          </div>
          <h2 className="text-[18px] font-bold mt-[30px] lg:w-[500px] lg:text-[22px]">
            {changeLanguage === "ENG"
              ? "Welcome to kptrans, your logistic solution!"
              : "კეთილი იყოს თქვენი მობრძანება kptrans-ში"}
          </h2>
          <p className="text-[15px] mt-[10px] lg:w-[500px] lg:text-[19px]">
            <div>
              {changeLanguage === "ENG"
                ? "Welcome to kptrans, where we redefine the standards of efficiency and reliability in the logistics industry. We have established ourselves as a trusted partner for businesses in our region. Our commitment to excellence, innovation, and customer satisfaction drives us to deliver unparalleled logistics solutions tailored to your specific needs."
                : "კეთილი იყოს თქვენი მობრძანება kptrans-ში, სადაც ჩვენ ხელახლა განვსაზღვრავთ ეფექტურობისა და საიმედოობის სტანდარტებს ლოჯისტიკური ინდუსტრიაში. , ჩვენ ჩამოვყალიბდით, როგორც სანდო პარტნიორი ბიზნესისთვის ჩვენს რეგიონში. ჩვენი ერთგულება სრულყოფილების, ინოვაციებისა და მომხმარებელთა კმაყოფილებისკენ გვიბიძგებს მივაწოდოთ შეუდარებელი ლოჯისტიკური გადაწყვეტილებები, რომლებიც მორგებულია თქვენს კონკრეტულ საჭიროებებზე."}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
