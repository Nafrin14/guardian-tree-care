import { useEffect, useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo1.webp";


function Navbar() {


  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();





  useEffect(()=>{


    if(location.pathname !== "/"){

      setActive("");

      return;

    }



    const sections = document.querySelectorAll("section[id]");



    const observer = new IntersectionObserver(

      (entries)=>{


        entries.forEach((entry)=>{


          if(entry.isIntersecting){

            setActive(entry.target.id);

          }


        });


      },

      {
        rootMargin:"-120px 0px -50% 0px",
        threshold:0
      }

    );



    sections.forEach((section)=>{

      observer.observe(section);

    });



    return ()=>observer.disconnect();



  },[location.pathname]);








  const navItems = [

    {
      name:"Home",
      id:"home"
    },

    {
      name:"About",
      id:"about"
    },

    {
      name:"Services",
      id:"services"
    },

    {
      name:"Testimonials",
      id:"testimonials"
    },

    {
      name:"Contact",
      id:"contact"
    }

  ];








  const scrollToSection = (id)=>{


    setMenuOpen(false);



    // Privacy / Terms page

    if(location.pathname !== "/"){


      navigate("/");


      setTimeout(()=>{


        const section = document.getElementById(id);



        if(section){

          section.scrollIntoView({

            behavior:"smooth",
            block:"start"

          });

        }


      },300);



      return;

    }







    const section = document.getElementById(id);



    if(section){


      section.scrollIntoView({

        behavior:"smooth",
        block:"start"

      });


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


        <button

          onClick={()=>scrollToSection("home")}

          className="
            flex
            items-center
            gap-3
          "

        >


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

              alt="Guardian Tree Care"

              className="
                w-full
                h-full
                object-contain
              "

            />


          </div>



          <div>


            <h2 className="
              text-white
              text-xl
              font-extrabold
            ">

              Guardian

            </h2>



            <p className="
              text-green-300
              text-xs
              tracking-widest
            ">

              TREE CARE

            </p>



          </div>



        </button>









        {/* Desktop Menu */}



        <nav

          className="
            hidden
            md:flex
            items-center
            gap-8
          "

        >


          {
            navItems.map((item)=>(


              <button

                key={item.id}

                onClick={()=>scrollToSection(item.id)}

                className={`

                  transition
                  font-medium

                  ${
                    active === item.id
                    ?
                    "text-green-300"
                    :
                    "text-white"
                  }

                  hover:text-green-300

                `}

              >

                {item.name}

              </button>


            ))

          }


        </nav>









        {/* Desktop Quote */}



        <button

          onClick={()=>scrollToSection("contact")}

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
            hover:bg-green-400
            transition
          "

        >

          <FaPhoneAlt/>

          Get Quote


        </button>









        {/* Mobile Button */}



        <button

          onClick={()=>setMenuOpen(!menuOpen)}

          className="
            md:hidden
            text-white
            text-2xl
          "

        >

          {

            menuOpen
            ?
            <FaTimes/>
            :
            <FaBars/>

          }


        </button>



      </div>









      {/* Mobile Menu */}



      {

        menuOpen && (


          <div

            className="
              md:hidden
              bg-green-950
              px-6
              pb-6
              space-y-3
            "

          >


            {

              navItems.map((item)=>(


                <button

                  key={item.id}

                  onClick={()=>scrollToSection(item.id)}

                  className={`

                    block
                    w-full
                    text-left
                    py-2
                    font-medium

                    ${
                      active===item.id
                      ?
                      "text-green-300"
                      :
                      "text-white"
                    }

                  `}

                >

                  {item.name}


                </button>


              ))

            }




            <button

              onClick={()=>scrollToSection("contact")}

              className="
                w-full
                bg-green-500
                text-green-950
                py-3
                rounded-full
                font-bold
                flex
                justify-center
                items-center
                gap-2
              "

            >

              <FaPhoneAlt/>

              Get Quote


            </button>



          </div>


        )


      }




      <div

        className="
          h-1
          bg-green-500
        "

      />



    </header>


  );

}



export default Navbar;