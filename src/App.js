import Navbar from "./components/Navbar";
import Home from './pages/Home'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

function App() {
  return (
   <>
     <Navbar />
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} exact/>
       </Routes>
     </BrowserRouter>
   </>
  );
}

export default App;
