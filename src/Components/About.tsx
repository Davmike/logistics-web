import truck from "../../public/assets/truck.png";
import ship from "../../public/assets/ship.png";
import airplane from "../../public/assets/airplane.png";

function About() {
  const categories = [
    { title: "Land Transport", text: "lorem ipsum 1", src: truck },
    { title: "Ship Transport", text: "lorem ipsum 2", src: ship },
    { title: "Air Transport", text: "lorem ipsum 3", src: airplane },
  ];

  return (
    <div className="pt-[40px] flex justify-center flex-wrap">
      {categories.map((category, index) => {
        return (
          // main div
          <div key={index} className="flex px-[15px] mb-[30px] items-center">
            {/* div for only images */}
            <div>
              <img src={category.src} className="w-[44px] h-[44px]" alt="" />
            </div>
            {/* div for only texts */}
            <div className="pl-[20px]">
              <h3 className="text-[#2c234d] text-[20px] font-semibold">
                {category.title}
              </h3>
              <p className="text-[#677294] text-[16px] font-normal">
                {category.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default About;
