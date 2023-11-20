import React from 'react';
import Shopper from '../../components/Shopper';


function PocetnaStranica(){
  
    return(
        
      <div>
        <div className="flex justify-between items center bg-primary p-5">
          <h1 className="text-2xl text-white">Shopping List - HOME</h1>
        </div>

      <div className="p-5 text-2xl text-primary text-bold">Choose to make a shopping list or preview existing lists</div>
      

      <Shopper/>
      <Shopper/>  
      <Shopper/>
      <Shopper/>
      <Shopper/>
    
      
     </div> 
    )

}

export default PocetnaStranica;
