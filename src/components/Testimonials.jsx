function Testimonials() {

  const reviews = [
    {
      name: "Michael Johnson",
      role: "Home Owner",
      text: "Guardian Tree Care provided excellent service. The team was professional, safe, and completed the work perfectly."
    },
    {
      name: "Sarah Williams",
      role: "Property Owner",
      text: "Very reliable tree service company. They removed a dangerous tree quickly and left my yard clean."
    },
    {
      name: "David Brown",
      role: "Business Owner",
      text: "Great experience from start to finish. Highly recommend Guardian Tree Care for quality work."
    }
  ];


  return (

    <section
      id="testimonials"
      className="
        py-24
        px-6
        bg-white
        scroll-mt-24
      "
    >

      <div
        className="
          max-w-6xl
          mx-auto
          text-center
        "
      >


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
          TESTIMONIALS
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
          What Our Customers Say
        </h2>




        <div
          className="
            mt-12
            grid
            md:grid-cols-3
            gap-8
          "
        >


          {
            reviews.map((review,index)=>(

              <div
                key={index}
                className="
                  bg-green-50
                  rounded-3xl
                  p-8
                  text-left
                  shadow-sm
                  hover:shadow-lg
                  transition
                "
              >


                <div
                  className="
                    text-yellow-500
                    text-xl
                    mb-4
                  "
                >
                  ★★★★★
                </div>



                <p
                  className="
                    text-gray-600
                    leading-relaxed
                    italic
                  "
                >
                  "{review.text}"
                </p>



                <div
                  className="
                    mt-6
                    border-t
                    pt-4
                  "
                >

                  <h3
                    className="
                      font-bold
                      text-green-950
                    "
                  >
                    {review.name}
                  </h3>


                  <span
                    className="
                      text-green-700
                      text-sm
                    "
                  >
                    {review.role}
                  </span>


                </div>


              </div>

            ))
          }


        </div>


      </div>


    </section>

  );

}


export default Testimonials;