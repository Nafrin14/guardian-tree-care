import {
  FaTree,
  FaCut,
  FaTruck,
  FaLeaf
} from "react-icons/fa";


import treeRemoval from "../assets/images/tree-removal.webp";
import treeTrimming from "../assets/images/tree-trimming.webp";
import stumpGrinding from "../assets/images/stump-grinding.webp";
import emergencyTree from "../assets/images/emergency-tree.webp";



function Services() {


  const scrollToContact = () => {

    const contactSection = document.getElementById("contact");

    if (contactSection) {

      contactSection.scrollIntoView({
        behavior: "smooth"
      });

    }

  };



  const services = [

    {
      icon: <FaTree />,
      image: treeRemoval,
      title: "Tree Removal",
      text: "Safe and professional tree removal services to protect your property."
    },

    {
      icon: <FaCut />,
      image: treeTrimming,
      title: "Tree Trimming",
      text: "Expert trimming and pruning to maintain healthy and beautiful trees."
    },

    {
      icon: <FaLeaf />,
      image: stumpGrinding,
      title: "Stump Grinding",
      text: "Complete stump removal solutions to clear your outdoor space."
    },

    {
      icon: <FaTruck />,
      image: emergencyTree,
      title: "Emergency Tree Care",
      text: "Fast response for storm damage and urgent tree service needs."
    }

  ];



  return (

    <section
      id="services"
      className="
        py-24
        px-6
        bg-green-50
      "
    >


      <div
        className="
          max-w-7xl
          mx-auto
        "
      >



        <div className="text-center mb-16">


          <span
            className="
              inline-block
              bg-green-100
              text-green-700
              px-5
              py-2
              rounded-full
              text-sm
              font-bold
            "
          >
            OUR SERVICES
          </span>



          <h2
            className="
              mt-5
              text-4xl
              lg:text-5xl
              font-extrabold
              text-green-950
            "
          >
            Professional Tree Care Solutions
          </h2>



          <p
            className="
              mt-5
              max-w-2xl
              mx-auto
              text-gray-600
            "
          >
            Reliable tree services designed to keep your
            property safe, clean, and beautiful.
          </p>


        </div>






        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >



          {
            services.map((service,index)=>(


              <div
                key={index}
                className={`
                  bg-white
                  rounded-[35px]
                  overflow-hidden
                  shadow-lg
                  hover:-translate-y-3
                  transition
                  duration-300
                  ${
                    index % 2 === 1
                    ? "lg:mt-16"
                    : ""
                  }
                `}
              >





                <div
                  className="
                    relative
                    h-56
                    overflow-hidden
                  "
                >


                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      hover:scale-110
                      transition
                      duration-500
                    "
                  />




                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      w-14
                      h-14
                      rounded-2xl
                      bg-green-700
                      text-white
                      flex
                      items-center
                      justify-center
                      text-2xl
                      shadow-lg
                    "
                  >

                    {service.icon}

                  </div>


                </div>







                <div
                  className="
                    p-7
                  "
                >



                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-green-950
                    "
                  >

                    {service.title}

                  </h3>





                  <p
                    className="
                      mt-3
                      text-gray-600
                      leading-relaxed
                    "
                  >

                    {service.text}

                  </p>





                  <button
                    onClick={scrollToContact}
                    className="
                      mt-6
                      text-green-700
                      font-bold
                      hover:text-green-900
                      transition
                    "
                  >
                    Learn More →
                  </button>



                </div>



              </div>


            ))
          }



        </div>



      </div>



    </section>

  );

}


export default Services;