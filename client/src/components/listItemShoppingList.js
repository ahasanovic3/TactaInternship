import { useNavigate } from 'react-router-dom'
import { Button } from 'antd';

function ListItemShoppingList(){
    
return(
        
  <div className="list-item">
 
  <div>
    <h2>bla</h2>
    <p>bla</p>
  </div>
  <div>
  <Button onClick={() => console.log('Button 1 clicked')} type="primary">Make a shopping list</Button>
  <Button onClick={() => console.log('Button 2 clicked')} type="primary">Preview shopping list</Button>
  </div>
</div>
      
 
  )
 
}

export default ListItemShoppingList;