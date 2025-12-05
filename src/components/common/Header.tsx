"use client";

import React, { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { images } from "@/utils/images";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const outerPages = ["/blogs", "/protechTools"];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");
  const pathname = usePathname();
  const navigate = useRouter();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]"); // assuming all sections have id="home", "about", etc.
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !outerPages.includes(pathname)) {
            console.log("Entering section:", entry.target.id);
            setCurrentSection(entry.target.id); // set the id of the visible section
          }
        });
      },
      {
        threshold: 0.4, // adjust: section is "active" when ~40% visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [pathname]);

  // For contact Section
  useEffect(() => {
    if (pathname.includes("blogs")) {
      setCurrentSection("blogs");
    }
    if (pathname.includes("protech-software")) {
      setCurrentSection("tools");
    }
  }, [pathname]);

  // Early return check after all hooks are called
  if (pathname.includes("dashboard")) {
    return null;
  }

  const navItems = [
    { name: "Home", href: "#", key: "home" },
    { name: "About", href: "#about", key: "about" },
    { name: "Services", href: "#services", key: "services" },
    { name: "Client Portal", href: "#client", key: "client" },
    { name: "Contact", href: "#contact", key: "contact" },
    { name: "Blog", href: "/blogs", key: "blogs" },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };
  const handleLinkClick = (key: string) => {
    if (
      ["blogs", "tools"].includes(currentSection) &&
      !["blogs", "tools", "contact"].includes(key)
    ) {
      if (key === "home") {
        navigate.push(`/`);
      } else {
        navigate.push(`/#${key}`);
      }
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-primary backdrop-blur-md shadow-lg py-4"
            : "bg-transparent backdrop-blur-sm py-4 "
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2 group">
                <img
                  src={
                    pathname.includes("protech-software")
                      ? images.LOGO_SECTION_SOFTWARE
                      : images.LOGO_SECTION
                  }
                  className="w-[100px] h-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <ul className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => {
                        handleLinkClick(item.key);
                      }}
                      className={`${
                        item.key === currentSection
                          ? "text-logo underline"
                          : "text-white"
                      } hover:text-logo text-2xl font-semibold transition-colors duration-200 relative group`}
                    >
                      {item.name}
                      {item.key !== currentSection && (
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-logo transition-all duration-300 group-hover:w-full"></span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <motion.button
                className="px-6 py-2.5 !cursor-pointer border border-logo text-logo font-medium rounded-full relative overflow-hidden group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 20px rgba(211, 187, 68, 0.4)",
                }}
                onClick={() => {
                  if (currentSection === "blogs") {
                    navigate.push("/#contact");
                  }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <span className="relative z-10">
                  {" "}
                  <a href="#contact">Get a Free Consultation </a>
                </span>
                {/* shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-500 ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Background Overlay */}
        <div
          className={`absolute inset-0 bg-primary transition-opacity duration-500 ${
            isMenuOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Panel - Animates from top-right corner */}
        <div
          className={`absolute bg-primary transition-all duration-500 ease-out origin-top-right ${
            isMenuOpen
              ? "inset-0 scale-100 opacity-100"
              : "top-0 right-0 w-0 h-0 scale-0 opacity-0"
          }`}
        >
          <div className="relative h-full flex flex-col">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center space-x-2">
                <img src={images.LOGO_SECTION} className="w-[100px] h-auto" />
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-transparent transition-colors hover:border hover:border-logo "
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-white hover:text-logo" />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <nav className="flex-1 px-6 py-8">
              <ul className="space-y-1">
                {navItems.map((item, index) => (
                  <li
                    key={item.name}
                    style={{
                      animation: isMenuOpen
                        ? `slideInFromRight ${
                            0.3 + index * 0.1
                          }s ease-out forwards`
                        : "",
                    }}
                    className="opacity-0"
                  >
                    <a
                      href={item.href}
                      onClick={handleNavClick}
                      className="block py-3 px-4 text-lg font-medium text-text-primary hover:text-logo hover:bg-white rounded-lg transition-all duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Footer */}
            <div
              className="p-6 border-t opacity-0 w-full flex items-center justify-center"
              style={{
                animation: isMenuOpen
                  ? "fadeInUp 0.8s ease-out 0.5s forwards"
                  : "",
              }}
            >
              <button className="px-6 py-2.5 border border-logo text-logo cursor-pointer font-medium rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                <a
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (currentSection === "blogs") {
                      navigate.push("/#contact");
                    }
                  }}
                  href="#contact"
                >
                  Get a Free Consultation
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};
