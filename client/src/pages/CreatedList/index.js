import React from 'react';
import ListItem from '../../components/ItemList';

function CreatedList(){
  
    return(
        
      <div>
        <div className="flex justify-between items center bg-primary p-5">
          <h1 className="text-2xl text-white">Shopping List - Create a list</h1>
        </div>

      <div className="p-5 text-2xl text-primary text-bold">Make a list</div>
      

      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
        
      
      
      
    
      
     </div> 
    )

}

export default CreatedList;