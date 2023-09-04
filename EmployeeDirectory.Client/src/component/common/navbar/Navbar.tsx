import saketa from "../../../assets/saketa.jpg";
import profile from "../../../assets/profile.jpg";

import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="pb-4  mb-5 navbar">
        <div className="logo-block">
          <div className="img-container">
            <img src={saketa} alt="" />
          </div>
          <div className="company-block">
            <h1 className="company-name">Employee Directory</h1>
            <p className="company-tag">
              The Ultimate People Directory Experience
            </p>
          </div>
        </div>

        <div className="greeting-user ">
          <h2 className="greet-heading">
            <span>Welcome, </span>
            Rahul Kumar
          </h2>
          <div className="user-image-container">
            <img src={profile} alt="" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
