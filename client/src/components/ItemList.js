import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios, * as others from "axios";

function ItemList(){
  const [shopperList, setShopperList] = useState([]);
  
    const navigate =useNavigate();
    function manageClickPreview(){
      navigate("/PreviewList")
    }
    function BackToHome(){
      navigate("/")
    }
    
return(
        
  <div className="list-item">
 
  <div>
    <h2>bla</h2>
    <p>bla</p>
  </div>
  <div>
  <button onClick={(e)=>BackToHome()} >Back to Home</button>
  <button onClick={(e)=>manageClickPreview()}>Preview shopping list</button>
  </div>
</div>
      
 
  )

}

export default ItemList;