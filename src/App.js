

//  import './style.css';
import './table.css';
import { Provider } from "react-redux";
import { DefaultStore1 } from "./assignment/store1";
import { ReduxTable } from "./ReduxTable";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Update } from "./Edit";

// import { Home } from "./Assignment1/Home";
// import { StoreData } from "./Assignment1/store";




function App(){ 
 
   
  return(
    <div>
      <Provider store ={DefaultStore1}>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<ReduxTable/>}></Route>
     <Route path="/Edit/:id"  element={<Update/>}></Route>
     </Routes>
     </BrowserRouter>
     {/* <Home/> */}
      </Provider>



    </div>
  );
}

export default App;
    


