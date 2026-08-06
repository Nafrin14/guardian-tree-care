import { useEffect, useRef, useState } from "react";


function Contact() {


  const contactRef = useRef(null);

  const [showForm, setShowForm] = useState(false);



  useEffect(() => {


    const observer = new IntersectionObserver(

      ([entry]) => {


        if(entry.isIntersecting){


          setShowForm(true);

          observer.disconnect();


        }


      },

      {
        threshold:0.2
      }

    );



    if(contactRef.current){

      observer.observe(contactRef.current);

    }



    return () => observer.disconnect();


  },[]);







  return (


    <section

      id="contact"

      ref={contactRef}

      className="
        py-24
        px-6
        bg-green-50
        scroll-mt-24
      "

    >





      <div

        className="
          max-w-6xl
          mx-auto
          grid
          md:grid-cols-2
          gap-12
          items-start
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
              rounded-full
              text-sm
              font-bold
            "

          >

            CONTACT US

          </span>





          <h2

            className="
              mt-5
              text-4xl
              font-extrabold
              text-green-950
            "

          >

            Get In Touch With Guardian Tree Care

          </h2>





          <p className="mt-5 text-gray-600">

            Contact our team today for professional tree services.

          </p>



        </div>









        {/* GHL FORM */}



        <div

          className="
            bg-white
            rounded-3xl
            shadow-xl
            overflow-hidden
            w-full
          "

        >



          {

            showForm ? (


              <iframe

                src="https://link.kdlead.com/widget/form/DqptHnj0Yy2El4MSiCDA"

                title="Guardian Tree Care Contact Form"

                loading="lazy"

                scrolling="no"

                className="
                  w-full
                  border-0
                  overflow-hidden
                "

                style={{
                  height:"820px"
                }}

              ></iframe>



            ) : (


              <div

                className="
                  h-[820px]
                  flex
                  items-center
                  justify-center
                  text-gray-500
                "

              >

                Loading form...

              </div>


            )


          }



        </div>




      </div>





    </section>


  );


}


export default Contact;