        import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import { useParams } from "react-router-dom";
import CategoryPage from "./Pages/CategoryPage";
import Home from "./Pages/Home";

import data from "./config/data";
import ItemPage from "./Pages/ItemPage";
import News from "./Pages/News";
import Browse from "./Pages/Browse";
import NavBar from "./Component/HomeComponent/NavBar";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/explore" element */}
          <Route exact  path="/category/:category" element={<CategoryPage items={data}/>}/>
          <Route exact path='/category/tool/:tool' element={<ItemPage />}/>
          <Route exact path="/news" element={<News/>}/>
          <Route exact path="/category/" element={<Browse/>}/>
        </Routes>
        
      </Router>
    </div>
  );
}



export default App;
