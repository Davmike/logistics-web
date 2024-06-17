import logo from "../../public/assets/logo.png";

function Home() {
  return (
    <div
      id="home"
      className="text-[white] flex justify-center items-center flex-row"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="absolute px-[15px]">
        {/* div for image */}
        <div className="flex justify-center items-center">
          <img src={logo} className="w-[100px] h-[100px]" alt="" />
        </div>
        {/* div for texts */}
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-[32px] font-bold md:text-[40px] lg:text-[50px]">
            We Are Logistic Company
            <span className="text-[#f15f22]"> kptrans</span>
          </h1>
          <p className="w-[100%] max-w-[450px] h-[200px] mt-[30px] md:max-w-[768px] md:text-[20px] lg:text-[25px]">
            Welcome to pktrans, your trusted partner in logistics solutions.
            With years of experience and a commitment to excellence, we provide
            comprehensive logistics services tailored to meet your unique needs.
            Our team of experts ensures that your goods are transported
            efficiently, safely, and on time, every time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
