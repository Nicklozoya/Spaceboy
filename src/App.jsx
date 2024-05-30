import Space from "./Components/Space";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Planetmodal from "./Components/Planetmodal";



function App() {
return(
  <>
  <BrowserRouter>
  <Routes>
  <Route path="/Modal"></Route>
  </Routes>
  </BrowserRouter>
<Space />
</>
)
}
export default App;
