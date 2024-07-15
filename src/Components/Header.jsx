// import React from "react";
// import { Link } from "react-router-dom";
// function Header() {
//   return (
//     <div>
//       <header>
//         <nav className="navbar">
//           <div className="logo">
//             <i className="fas fa-feather-alt"></i>
//             <Link to="/">Scriptum</Link>{" "}
//           </div>
//           <div className="hamburger">
//             <div className="bar"></div>
//             <div className="bar"></div>
//             <div className="bar"></div>
//           </div>
//           <ul className="nav-links">
//             <li>
//               <Link to="/services">
//                 <i className="fas fa-cog"></i> Services
//               </Link>
//             </li>
//             <li>
//               <Link to="/about">
//                 <span className="icon">
//                   <i className="fas fa-user"></i>
//                 </span>{" "}
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact">
//                 <i className="fas fa-envelope"></i> Contact
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </header>
//     </div>
//   );
// }

// export default Header;
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleHamburgerClick = () => {
    setIsActive(!isActive);
  };

  const handleLinkClick = () => {
    setIsActive(false);
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">
            <Link to="/" onClick={handleLinkClick}>
              <i className="fas fa-feather-alt"></i>

              <i className="textlogo">Scriptum</i>
            </Link>
          </div>
          <div className="hamburger" onClick={handleHamburgerClick}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`nav-links ${isActive ? "active" : ""}`}>
            <li>
              <Link to="/services" onClick={handleLinkClick}>
                <i className="fas fa-cog"></i> Services
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>
                <span className="icon">
                  <i className="fas fa-user"></i>
                </span>{" "}
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>
                <i className="fas fa-envelope"></i> Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
