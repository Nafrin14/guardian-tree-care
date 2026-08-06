import { useState, useEffect } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.webp";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const location = useLocation();
  const navigate = useNavigate();

  const sections = [
    "home",
    "about",
    "services",
    "testimonials",
    "contact",
  ];

  useEffect(() => {
    if (location.pathname !== "/") {
      setActive("");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-120px 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      requestAnimationFrame(() => {
        const section = document.getElementById(
          location.hash.replace("#", "")
        );

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    }
  }, [location]);

  const scrollToSection = (id) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate({
        pathname: "/",
        hash: `#${id}`,
      });

      return;
    }

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}#${id}`
      );
    }
  };

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-green-950
        shadow-lg
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}

        <div className="flex items-center gap-3">
          <div
            className="
              w-14
              h-14
              bg-white
              rounded-full
              overflow-hidden
              border-2
              border-green-300
            "
          >
            <img
              src={logo}
              alt="Guardian Tree Care Logo"
              width={56}
              height={56}
              decoding="async"
              className="
                w-full
                h-full
                object-contain
              "
            />
          </div>

          <div>
            <h2 className="text-white text-xl font-extrabold">
              Guardian
            </h2>

            <p className="text-green-300 text-xs tracking-widest">
              TREE CARE
            </p>
          </div>
        </div>

        {/* Desktop Menu */}

        <nav
          className="
            hidden
            md:flex
            items-center
            gap-8
          "
        >
          {sections.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => scrollToSection(item)}
              className={`
                capitalize
                font-medium
                transition
                ${
                  active === item
                    ? "text-green-300"
                    : "text-white hover:text-green-300"
                }
              `}
            >
              {item === "testimonials"
                ? "Testimonials"
                : item}
            </button>
          ))}
        </nav>

        {/* Quote Button */}

        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          aria-label="Get free quote"
          className="
            hidden
            md:flex
            items-center
            gap-2
            bg-green-500
            text-green-950
            px-6
            py-3
            rounded-full
            font-bold
          "
        >
          <FaPhoneAlt />
          Get Quote
        </button>

        {/* Mobile Menu Button */}

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="
            md:hidden
            text-white
            text-2xl
          "
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div
          className="
            md:hidden
            bg-green-950
            px-6
            pb-6
            space-y-4
          "
        >
          {sections.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => scrollToSection(item)}
              className="
                block
                w-full
                text-left
                capitalize
                text-white
                hover:text-green-300
              "
            >
              {item === "testimonials"
                ? "Testimonials"
                : item}
            </button>
          ))}
        </div>
      )}

      <div className="h-1 bg-green-500"></div>
    </header>
  );
}

export default Navbar;