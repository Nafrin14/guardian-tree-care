import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";


function Footer() {


  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if(section){

      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  };


  return (

    <footer
      className="
        bg-green-950
        text-white
        pt-20
        px-6
      "
    >


      <div
        className="
          max-w-7xl
          mx-auto
          grid
          sm:grid-cols-2
          lg:grid-cols-4
          gap-12
          pb-16
        "
      >


        {/* Brand */}

        <div>

          <h2 className="text-2xl font-bold">
            Guardian Tree Care
          </h2>


          <p
            className="
              mt-5
              text-gray-300
              leading-relaxed
            "
          >
            Professional tree care experts providing
            safe, reliable, and affordable solutions
            to protect your property and landscape.
          </p>



          <div
            className="
              flex
              gap-4
              mt-6
            "
          >

            <a
              href="#"
              className="
                w-10
                h-10
                rounded-full
                bg-green-800
                flex
                items-center
                justify-center
                hover:bg-green-600
                transition
              "
            >
              <FaFacebookF />
            </a>


            <a
              href="#"
              className="
                w-10
                h-10
                rounded-full
                bg-green-800
                flex
                items-center
                justify-center
                hover:bg-green-600
                transition
              "
            >
              <FaInstagram />
            </a>


            <a
              href="#"
              className="
                w-10
                h-10
                rounded-full
                bg-green-800
                flex
                items-center
                justify-center
                hover:bg-green-600
                transition
              "
            >
              <FaLinkedinIn />
            </a>

          </div>


        </div>





        {/* Quick Links */}

        <div>

          <h3
            className="
              text-xl
              font-bold
              mb-6
            "
          >
            Quick Links
          </h3>


          <ul
            className="
              space-y-4
              text-gray-300
            "
          >

            <li>
              <button
                onClick={()=>scrollToSection("home")}
                className="hover:text-green-400 transition"
              >
                Home
              </button>
            </li>


            <li>
              <button
                onClick={()=>scrollToSection("about")}
                className="hover:text-green-400 transition"
              >
                About Us
              </button>
            </li>


            <li>
              <button
                onClick={()=>scrollToSection("services")}
                className="hover:text-green-400 transition"
              >
                Services
              </button>
            </li>


            <li>
              <button
                onClick={()=>scrollToSection("testimonials")}
                className="hover:text-green-400 transition"
              >
                Testimonials
              </button>
            </li>


            <li>
              <button
                onClick={()=>scrollToSection("contact")}
                className="hover:text-green-400 transition"
              >
                Contact
              </button>
            </li>


          </ul>


        </div>







        {/* Services */}

        <div>

          <h3
            className="
              text-xl
              font-bold
              mb-6
            "
          >
            Services
          </h3>


          <ul
            className="
              space-y-4
              text-gray-300
            "
          >

            <li>Tree Removal</li>

            <li>Tree Trimming</li>

            <li>Stump Grinding</li>

            <li>Emergency Tree Care</li>

          </ul>


        </div>







        {/* Contact */}

        <div>

          <h3
            className="
              text-xl
              font-bold
              mb-6
            "
          >
            Contact Us
          </h3>


          <ul
            className="
              space-y-5
              text-gray-300
            "
          >


            <li className="flex items-center gap-3">

              <FaPhone className="text-green-400"/>

              <span>
                +1 716-526-8741
              </span>

            </li>



            <li className="flex items-center gap-3">

              <FaEnvelope className="text-green-400"/>

              <span>
                info@guardiantreecare.com
              </span>

            </li>



            <li className="flex gap-3">

              <FaMapMarkerAlt className="text-green-400 mt-1"/>

              <span>
                Professional Tree Care Service
              </span>

            </li>


          </ul>


        </div>


      </div>








      {/* Bottom */}

      <div
        className="
          border-t
          border-green-800
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            py-6
            flex
            flex-col
            md:flex-row
            justify-center
            items-center
            gap-6
            text-gray-400
            text-sm
          "
        >


          <p>
            © {new Date().getFullYear()} Guardian Tree Care.
            All Rights Reserved.
          </p>



          <div
            className="
              flex
              gap-5
              items-center
            "
          >

            <Link
              to="/privacy"
              className="
                hover:text-green-400
                transition
              "
            >
              Privacy Policy
            </Link>


            <Link
              to="/terms"
              className="
                hover:text-green-400
                transition
              "
            >
              Terms & Conditions
            </Link>


          </div>


        </div>


      </div>


    </footer>

  );

}


export default Footer;