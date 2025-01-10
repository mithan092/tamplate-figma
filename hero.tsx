import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
           <div className="flex flex-col-reverse md:flex-row  my=[50px]
            mx-auto  items-center flex col justify-between md:w-[1280px] md:h-[704px]">
                      <div className="flex  flex-col justify-between  px-12 py-12 bg-[#2A254B] text-white w-[1280px] h-[584px] items-start">
                             <h1 className="w-[513px] h-[90px]  text-3xl ">The furniture brand for the<br></br>
                                                                                                future, with timeless designs</h1>   

                 <button className="bg-gray-200 w-[170px] h-[56px]"><p className=" w-[10
                 120px] h-[24px] text-black" > View collection</p></button>

                 <p className="py-12 px-12 flex  flex-col justify-between">A new era in eco friendly furniture with Avelon, the French luxury retail brand
with nice fonts, tasteful colors and a beautiful way to display things digitally
using modern web technologies.</p>

              
              </div>


            <div className="w-[520px] h-[584px]">
              <Image src="/acess/hero pic.jpg" alt="hero pic" width={520} height={584}/>
            </div>
                           </div>
          

  )};

export default Hero;

