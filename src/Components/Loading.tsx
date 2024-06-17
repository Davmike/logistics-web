import logo from "../../public/assets/logo.png";

const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="logo-container">
        <img src={logo} alt="Loading logo" className="loading-logo" />
      </div>
    </div>
  );
};

export default Loading;
