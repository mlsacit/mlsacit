import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Second = () => {
  useEffect(() => {
      AOS.init({
        offset:120,
        duration: 1000,
        easing: "ease-out",
        once: true,
        mirror:false
      });
    }, []);
  return (
      <div className="p-10 max-sm:p-3  ">
        {/* Flex container to align both boxes horizontally */}
        <div className=" relative flex items-center flex-wrap justify-between gap-5  max-sm:flex-col">
          {/* Green box */}
          <div className="flex h-[5vw] w-[38vw] relative mb-auto  max-sm:mr-auto max-sm:w-[100%] max-sm:h-[7vw]">
            <Image
              src="/bluemist.svg"
              alt="banner"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
              className="z-10"
              data-aos="slide-right"
            />
            <div className="absolute inset-0 pl-[1.5vw] flex z-0 text-white text-[3vw] font-bold font-[CB]  max-lg:text-[3.6vw]  mb-auto" data-aos="zoom-out-right">

              <h1 className="max-sm:text-[5vw]">
              Be a <span className="text-blue-500 mx-[0.5vw]"> force </span> for good
              </h1>
            
            </div>
          </div>

          {/* Yellow box */}
          <div className="w-[38vw] ml-auto flex justify-center items-center max-sm:w-[100%] max-sm:p-[1vw]" data-aos="fade-left">
            <h3 className="text-[1.5vw] font-[Excon] text-white max-sm:text-[3vw]">
            MLSA CIT is a chapter of the global Microsoft Learn Student Ambassador community at CIT Bengaluru. We empower learning through workshops and seminars, foster engagement through hands-on tech experiences, and cultivate leadership by driving innovation and industry exposure.
            </h3>
          </div>
        </div>
        
        <div className=" mt-[5vw] flex max-sm:flex-col items-center h-full w-full relative  max-sm:p-[5vw] ">
          {/* Left Image */}
          <div className=" mt-auto w-full h-auto relative  max-sm:bg-gradient-to-br from-[#3a3a3a82] to-[#00000000] max-sm:rounded-tl-[23.69px] max-sm:rounded-bl-[23.69px] max-sm:ml-[4rem] ">
            <Image
              src="/boxes/left.svg"
              alt="Left box"
              width={245}
              height={223}
              layout="responsive"
              objectFit="contain"
              className="max-sm:hidden"
              data-aos="slide-right"
            />
            <Image
              src="/boxes/left-tp.svg"
              alt="Left border"
              width={245}
              height={223}
              layout="responsive"
              objectFit="contain"
              className="sm:hidden"
              data-aos="slide-left"
            />
            {/* <div className="absolute inset-0 pl-5 flex z-0 text-white text-[1.5vw] font-bold font-[LM] bg-yellow-500"> */}
              <h1 className="absolute inset-0 text-[1.2vw] font-semibold p-[2vw] h-full w-full text-white max-sm:p-[10vw] max-sm:text-[3vw]" data-aos="zoom-out">
              Founded in 2020, MLSA CIT began with a single Alpha Microsoft Learn Student Ambassador, laying the foundation for a thriving tech-driven initiative.
              </h1>
            {/* </div> */}
          </div>

          {/* Center Image */}
          <div className=" w-full  h-full mb-auto relative  max-sm:bg-gradient-to-r from-[#dcdcdc00] to-[#767676] max-sm:rounded-tr-[23.69px] max-sm:rounded-br-[23.69px] max-sm:mr-[4rem]">
            <Image
              src="/boxes/center.svg"
              alt="center image"
              width={245}
              height={223}
              layout="responsive"
              objectFit="contain"
              className="max-sm:hidden"
              data-aos="slide-up"
            />
            <Image
              src="/boxes/right-tp.svg"
              alt="right border"
              width={245}
              height={223}
              layout="responsive"
              objectFit="contain"
              className="sm:hidden"
              data-aos="slide-right"
            />
            <h1 className="absolute inset-0 text-[1.2vw] font-semibold p-[2vw] h-full w-full max-sm:p-[10vw] max-sm:text-[3vw] text-black" data-aos="zoom-out">
            Now in its third generation of leaders, MLSA CIT stands stronger than ever, successfully conducting impactful workshops and learning initiatives—driven by the commitment to push boundaries and shape the future of tech.
              </h1>
          </div>

          {/* Right Image */}
          <div className=" w-full mt-auto h-full relative   max-sm:bg-gradient-to-tr from-[#3a3a3acc] to-[#00000000] max-sm:rounded-tl-[23.69px] max-sm:rounded-bl-[23.69px] max-sm:ml-[4rem]">
            <Image
              src="/boxes/right.svg"
              alt="right image"
              width={245}
              height={223}
              layout="responsive"
              objectFit="contain"
              className="max-sm:hidden"
              data-aos="slide-left"
            />
            <Image
              src="/boxes/bor.svg"
              alt="left border"
              width={245}
              height={223}
              layout="responsive"
              objectFit="contain"
              className="sm:hidden"
              data-aos="slide-left"
            />
            <h1 className="absolute inset-0 text-[1.2vw] font-semibold p-[2vw] h-full w-full text-white max-sm:p-[10vw] max-sm:text-[3vw]" data-aos="zoom-out">
            What followed was a surge of innovation and learning, rapidly producing seven Beta MLSAs and expanding the chapter into a dynamic and engaged network of tech enthusiasts. 
              </h1>
          </div>
        </div>
      </div>
  );
};

export default Second;


