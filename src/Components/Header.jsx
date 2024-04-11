import React from "react";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#2aa7ff",
        width: "100%",
        height: "40px",
        gap: "0px",
        opacity: "0px",
      }}
    >
      <p
        style={{
          fontFamily: "Poppins",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "40px",
          color: "white",
          textAlign: "center",
        }}
      >
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </p>
    </div>
  );
};

export default Header;
