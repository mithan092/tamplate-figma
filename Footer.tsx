


export default function Footer(){
  return (
            <div className=" w-[1440px] h-[50px]">
                <footer className="flex bg-[#2A254B] text-white body-font bg-[#000000] h-[230px] w-[1340px]  gap-2">
                    <div className="  font-small text-[#FAFAFA] tracking-widest text-sm mb-3 flex"> </div>
                   <div className="lg:w-1/6 md:w-1/2 w-[1240px] h-[50px] px-4 flex">
                     
                        <ol className=" font-small text-white list-none py-5 px-6 mb-14 h-[20px] w-[123px]">
                         <li>menu </li>
                         <li>New arrivals</li>
                         <li><a className="font-[Clash Display]">Best sellers</a> </li>
                         <li><a className="font-[Clash Display]">Recently viewed</a></li>
                         {/* <li><a className="font-[Clash Display]">Popular </a> </li> */}
                         <li><a className="font-[Clash Display]">products</a> </li>
                        </ol>
                    </div>
                    <div className="lg:w-1/6 md:w-1/2 w-full px-4">
           
                             <ol className=" font-small text-white list-none py-4 px-2 mb-14 h-[20px] w-[123px]">
                         <li>menu </li>
                         <li>New arrivals</li>
                         <li><a className="font-[Clash Display]">Best sellers</a> </li>
                         <li><a className="font-[Clash Display]">Recently viewed</a></li>
                         <li><a className="font-[Clash Display]">Popular this week</a> </li>
                         <li><a className="font-[Clash Display]">All products</a> </li>
                        </ol>
                   
                    </div>
                    <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <div className="list-none mb-10">
                             <ol className=" font-small text-white list-none py-4 px-2 mb-14 h-[20px] w-[123px]">
                         <li>menu </li>
                         <li>New arrivals</li>
                         <li><a className="font-[Clash Display]">Best sellers</a> </li>
                         <li><a className="font-[Clash Display]">Recently viewed</a></li>
                         <li><a className="font-[Clash Display]">Popular this week</a> </li>
                         <li><a className="font-[Clash Display]">All products</a> </li>
                        </ol>
                   </div>
                     </div>
  
                           <div >
                              <div className="container mx-auto py-4 px-5 flex-col sm:flex-row  gap-6 items-center justify-center">
                              <p className="text-white text-sm justify-center "> Join our mailing list</p>
                              
                                <input className="border broder-red-100  items-[center] w-[509px] h-[56px]"  placeholder="your @gmail.com">
                             </input>
                          </div>
                          
                     </div>                     </footer>


                           <div className=" w-[1340px] h-[50px]">
                             <footer >
                                   <div className="flex  flex justify between text-white bg-[#2A254B]  px-5 py-2 items-center   h-[40px]">
                                     
                                  <div className=" flex item-left">Made by :<a href="mk.png" >Develper-Mithan-kumar</a></div>

                                    <div className=" flex text-white flex-item-center gap-2 px-5 py-4px ">
                                      <div><i className="bi bi-linkedin"></i></div>
                                      <div><i className="bi bi-facebook"></i></div>
                                      <div><i className="bi bi-instagram"></i></div>
                                      <div><i className="bi bi-skype"></i></div>
                                      <div><i className="bi bi-twitter"></i></div>
                                      <div><i className="bi bi-pinterest"></i></div>

                                   </div>
                                   </div>

                                  </footer>
                           </div>
                 

             </div>
  )
}