import React from "react";

const FooterComponent = () => {
  const currentYear = new Date().getFullYear(); // Dynamically fetch the current year

  return (
    <footer className="footer">
      <span className="text-muted">
        All Rights Reserved {currentYear} @Itvedant
      </span>
    </footer>
  );
};

export default FooterComponent;