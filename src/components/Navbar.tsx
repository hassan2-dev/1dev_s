import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg py-2"
          : "bg-white py-2"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center group">
            <span className="ml-2 text-2xl font-bold  text-primary-500 group-hover:text-primary-600 transition-all duration-300">
              {"</1dev_s>"}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-x-8">
            {["home", "services", "portfolio", "about", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="relative text-gray-700 hover:text-blue-600 transition-colors font-medium group"
                >
                  {section === "home" && "الرئيسية"}
                  {section === "services" && "خدماتنا"}
                  {section === "portfolio" && "أعمالنا"}
                  {section === "about" && "من نحن"}
                  {section === "contact" && "تواصل معنا"}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
                </button>
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <nav className="flex flex-col space-y-2 py-4 px-4 text-right">
          {["home", "services", "portfolio", "about", "contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 hover:text-blue-600 transition-colors py-2 px-4 font-medium rounded-lg hover:bg-blue-50"
              >
                {section === "home" && "الرئيسية"}
                {section === "services" && "خدماتنا"}
                {section === "portfolio" && "أعمالنا"}
                {section === "about" && "من نحن"}
                {section === "contact" && "تواصل معنا"}
              </button>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
