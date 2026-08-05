import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function ScrollToTop() {

  const location = useLocation();


  useEffect(() => {


    if (location.hash) {


      setTimeout(() => {


        const element = document.querySelector(location.hash);


        if (element) {

          element.scrollIntoView({

            behavior: "smooth",
            block: "start"

          });

        }


      }, 100);


    } else {


      window.scrollTo({

        top: 0,
        behavior: "smooth"

      });


    }


  }, [location]);



  return null;

}


export default ScrollToTop;