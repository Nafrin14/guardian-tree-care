import hero1 from "../assets/images/hero1.webp";
import hero2 from "../assets/images/hero2.webp";
import hero3 from "../assets/images/hero3.webp";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        pt-32
        px-6
        overflow-hidden
        bg-gradient-to-br
        from-green-50
        via-white
        to-emerald-100
        scroll-mt-24
      "
    >
      {/* Background Shapes */}
      <div
        className="
          absolute
          -top-20
          -right-20
          w-96
          h-96
          bg-green-200
          rounded-full
          opacity-40
          blur-3xl
        "
      ></div>

      <div
        className="
          absolute
          bottom-0
          -left-20
          w-80
          h-80
          bg-emerald-200
          rounded-full
          opacity-30
          blur-3xl
        "
      ></div>

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-12
          items-center
        "
      >
        {/* Content */}
        <div>
          <span
            className="
              inline-block
              bg-green-100
              text-green-700
              px-5
              py-2
              rounded-lg
              text-sm
              font-bold
              tracking-wider
              mb-6
            "
          >
            PROFESSIONAL TREE CARE
          </span>

          <h1
            className="
              text-5xl
              lg:text-6xl
              font-extrabold
              leading-tight
              text-green-950
            "
          >
            Protecting Trees.
            <br />
            <span className="text-green-700">
              Creating Beautiful Landscapes.
            </span>
          </h1>

          <p
            className="
              mt-6
              text-lg
              text-gray-600
              max-w-xl
              leading-relaxed
            "
          >
            Guardian Tree Care provides reliable tree removal,
            trimming, pruning, and emergency tree services.
            Our experts keep your property safe and beautiful.
          </p>

          <div
            className="
              flex
              gap-4
              mt-8
              flex-wrap
            "
          >
            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              className="
                bg-green-700
                text-white
                px-8
                py-4
                rounded-xl
                font-bold
                hover:bg-green-800
                transition
              "
            >
              Get Free Quote
            </button>

            <a
              href="tel:+17165268741"
              className="
                border-2
                border-green-700
                text-green-700
                px-8
                py-4
                rounded-xl
                font-bold
                hover:bg-green-700
                hover:text-white
                transition
              "
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Image Collage */}
        <div
          className="
            relative
            h-[620px]
            flex
            items-center
            justify-center
          "
        >
          {/* Left Image */}
          <img
            src={hero1}
            alt="Professional tree care service"
            className="
              absolute
              left-0
              top-36
              w-56
              h-72
              object-cover
              rounded-[45px]
              shadow-2xl
              rotate-[-10deg]
              border-8
              border-white
            "
            loading="lazy"
            decoding="async"
          />

          {/* Center Image (LCP) */}
          <img
            src={hero2}
            alt="Tree maintenance work"
            className="
              relative
              z-20
              w-80
              h-[540px]
              object-cover
              rounded-[70px]
              shadow-2xl
              border-8
              border-white
            "
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />

          {/* Right Image */}
          <img
            src={hero3}
            alt="Beautiful landscape trees"
            className="
              absolute
              right-0
              top-24
              w-56
              h-72
              object-cover
              rounded-[45px]
              shadow-2xl
              rotate-[10deg]
              border-8
              border-white
            "
            loading="lazy"
            decoding="async"
          />

          {/* Trust Badge */}
          <div
            className="
              absolute
              bottom-16
              right-10
              z-30
              bg-white
              px-6
              py-4
              rounded-2xl
              shadow-xl
            "
          >
            <p
              className="
                text-green-700
                font-bold
              "
            >
              25+ Years
            </p>

            <p
              className="
                text-sm
                text-gray-600
              "
            >
              Trusted Tree Care
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;