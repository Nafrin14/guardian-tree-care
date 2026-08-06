import aboutImage from "../assets/images/about.webp";


function About() {

  return (

    <section 
      id="about"
      className="
        py-24
        px-6
        bg-white
        scroll-mt-24
      "
    >

      <div className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-2
        gap-12
        items-center
      ">


        {/* Image */}

        <div className="relative">


          <img

            src={aboutImage}

            alt="Guardian Tree Care team"

            className="
              rounded-[40px]
              shadow-xl
              w-full
              h-[450px]
              object-cover
            "

            loading="lazy"

            decoding="async"

          />



          <div
            className="
              absolute
              -bottom-6
              -right-6
              bg-green-700
              text-white
              px-6
              py-4
              rounded-2xl
              shadow-lg
            "
          >

            <p className="text-2xl font-bold">
              25+
            </p>


            <p className="text-sm">
              Years Experience
            </p>


          </div>


        </div>





        {/* Content */}


        <div>


          <span className="
            inline-block
            bg-green-100
            text-green-700
            px-5
            py-2
            rounded-full
            text-sm
            font-bold
            tracking-wider
            mb-5
          ">

            ABOUT US

          </span>





          <h2 className="
            text-4xl
            lg:text-5xl
            font-extrabold
            text-green-950
            leading-tight
          ">

            Trusted Tree Care Experts For Your Property

          </h2>






          <p className="
            mt-6
            text-gray-600
            text-lg
            leading-relaxed
          ">

            Guardian Tree Care delivers professional and
            dependable tree services with safety, quality,
            and customer satisfaction as our priority.
            Our experienced team helps maintain healthy
            trees and beautiful outdoor spaces.

          </p>





          <div className="
            grid
            grid-cols-2
            gap-6
            mt-8
          ">



            <div className="
              bg-green-50
              rounded-2xl
              p-5
            ">


              <p className="
                text-3xl
                font-bold
                text-green-700
              ">

                10+

              </p>



              <p className="
                text-gray-600
                mt-1
              ">

                Years Experience

              </p>



            </div>








            <div className="
              bg-green-50
              rounded-2xl
              p-5
            ">


              <p className="
                text-3xl
                font-bold
                text-green-700
              ">

                100%

              </p>



              <p className="
                text-gray-600
                mt-1
              ">

                Customer Satisfaction

              </p>



            </div>



          </div>







          <button

            onClick={() => {

              document
              .getElementById("contact")
              ?.scrollIntoView({

                behavior:"smooth"

              });

            }}

            aria-label="Contact Guardian Tree Care"

            className="
              inline-block
              mt-8
              bg-green-700
              text-white
              px-8
              py-3
              rounded-full
              font-bold
              hover:bg-green-800
              transition
            "

          >

            Learn More

          </button>





        </div>




      </div>


    </section>

  );

}


export default About;