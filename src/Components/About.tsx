import truck from "../../public/assets/truck.png";
import ship from "../../public/assets/ship.png";
import airplane from "../../public/assets/airplane.png";
import container from "../../public/assets/container.jpg";

function About() {
  const categories = [
    { title: "Land Transport", text: "lorem ipsum 1", src: truck },
    { title: "Ship Transport", text: "lorem ipsum 2", src: ship },
    { title: "Air Transport", text: "lorem ipsum 3", src: airplane },
  ];

  return (
    <div>
      <div className="px-[15px] mt-[30px] flex justify-center items-center flex-col">
        <h2 className="text-[25px] font-semibold text-[#2c234d]">
          Why Clients Choose Us
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
              className="flex px-[23px] w-[250px] lg:w-[400px] items-center bg-[white] py-[25px] rounded-[10px]"
            >
              {/* div for only images */}
              <div>
                <img src={category.src} className="w-[44px] h-[44px]" alt="" />
              </div>
              {/* div for only texts */}
              <div className="pl-[20px]">
                <h3 className="text-[#2c234d] text-[20px] font-semibold lg:text-[25px]">
                  {category.title}
                </h3>
                <p className="text-[#677294] text-[16px] font-normal lg:text-[22px]">
                  {category.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
