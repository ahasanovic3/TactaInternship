import { BrowserRouter, Routes, Route} from "react-router-dom"
//import { Button } from 'antd';
import PocetnaStranica from "./pages/PocetnaStrana";
import PreviewList from "./pages/PreviewList";
import CreateList from "./pages/CreatedList";


function App() {
  return (
    
    

    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PocetnaStranica/>}/>
        <Route path="/CreateList/:id" element={<CreateList/>}/>
        <Route path="/PreviewList/:id" element={<PreviewList/>}/>
      </Routes>
      </BrowserRouter>
    </div> 
    
  );
}

export default App;
