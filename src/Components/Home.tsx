import logo from "../../public/assets/logo.png";

function Home() {
  return (
    <div id="home" className="text-[white]">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="absolute px-[15px]">
        {/* div for image */}
        <div className="flex justify-center items-center">
          <img src={logo} className="w-[100px] h-[100px]" alt="" />
        </div>
        {/* div for texts */}
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-[32px] font-bold">
            Safe & Reliable <span className="text-[#f15f22]">Logistic </span>
            Solution!
          </h1>
          <p className="w-[100%] h-[250px] mt-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
