import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios, * as others from "axios";

function Shopper() {
  const [shopperList, setShopperList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/getAllShoppers"
        );
        console.log(response);
        setShopperList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const navigate = useNavigate();
  function manageClickPreview(shopperId) {
    navigate("/PreviewList/"+shopperId);
  }
  function manageClickCreated(shopperId) {
    navigate("/CreateList/"+shopperId);
  }

  return shopperList.map((Shopper) => {
    return (
      <div>
        <h3>
          {Shopper.shopperName} {Shopper.shopperSurname}
        </h3>
        <h5>Age: {Shopper.shopperAge}</h5>
        <div>
          <button onClick={(e) => manageClickCreated(Shopper._id)}>
            Create shopping list
          </button>
          <button onClick={(e) => manageClickPreview(Shopper._id)}>
            Preview shopping list
          </button>
        </div>
      </div>
    );
  });
}

export default Shopper;
