import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button after scrolling 300px
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 text-xl font-bold bg-transparent right-5 border border-[#078D84] text-[#078D84] px-7 py-5 rounded-full shadow-lg transition-all duration-300"
        >
          🠙{" "}
        </button>
      )}
    </div>
  );
};

export default BackToTop;
