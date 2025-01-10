

export default function Header() {
    return (
      <div>
            <div className="flex bg-white justify-between px-[2%] py-[4px] items-[center]  w-[1340px] h-[50px]">
              <div className= "flex items-center" >  
                  <div><i className="bi bi-search"></i></div>
             </div>

            <div className=" flex font-bold items-center ">
               <p>Avion</p>
            </div>

           <div className="flex gap-2  px-[2%] py-[4px] h-[10px] w-[8px]">
                <div><i className="bi bi-cart3"></i></div>
                <div><i className="bi bi-person-circle"></i></div>
                
            </div>
            </div>
                 
            <div className="flex bg-white flex justify-between px-[20%] py-[1%]  w-[1340px] h-[50px] ">
            <p>Plants pots</p>
            <p>Ceramics</p>
            <p>Tables</p>
            <p>Chairs</p>
            <p>Crockery</p>
            <p>Tablewere</p>
            <p>Cultery</p>
            </div>
         
      </div>
       
      );
  }
  