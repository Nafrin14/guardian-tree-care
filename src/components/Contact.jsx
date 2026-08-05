import { useEffect } from "react";


function Contact() {


  useEffect(() => {


    const script = document.createElement("script");

    script.src = "https://link.kdlead.com/js/form_embed.js";

    script.async = true;


    document.body.appendChild(script);



    return () => {

      document.body.removeChild(script);

    };


  },[]);






  return (


    <section

      id="contact"

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






        {/* LEFT CONTENT */}



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
              tracking-wider
            "

          >

            CONTACT US

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

            Get In Touch With Guardian Tree Care

          </h2>






          <p

            className="
              mt-5
              text-gray-600
              text-lg
              leading-relaxed
            "

          >

            Contact our team today for professional tree
            removal, trimming, pruning, and emergency
            tree care services.

          </p>






          <div

            className="
              mt-8
              space-y-4
            "

          >





            <div

              className="
                bg-white
                p-5
                rounded-2xl
                shadow-sm
              "

            >

              <h3 className="font-bold text-green-700">

                Phone

              </h3>


              <p className="text-gray-600">

                +1 716-526-8741

              </p>


            </div>







            <div

              className="
                bg-white
                p-5
                rounded-2xl
                shadow-sm
              "

            >

              <h3 className="font-bold text-green-700">

                Email

              </h3>


              <p className="text-gray-600">

                info@guardiantreecare.com

              </p>


            </div>





          </div>





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



          <iframe

            src="https://link.kdlead.com/widget/form/DqptHnj0Yy2El4MSiCDA"


            style={{

              width:"100%",

              height:"877px",

              border:"none",

              borderRadius:"8px"

            }}



            id="inline-DqptHnj0Yy2El4MSiCDA"



            data-layout='{"id":"INLINE"}'



            data-trigger-type="alwaysShow"



            data-activation-type="alwaysActivated"



            data-deactivation-type="neverDeactivate"



            data-form-name="Form 0"



            data-height="877"



            data-layout-iframe-id="inline-DqptHnj0Yy2El4MSiCDA"



            data-form-id="DqptHnj0Yy2El4MSiCDA"



            title="Guardian Tree Care Contact Form"



          ></iframe>




        </div>







      </div>






    </section>


  );

}


export default Contact;