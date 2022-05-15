import Navbar from "./components/Navbar";
import Home from './pages/Home'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoutes";



function App() {
  return (
   <>
  <AuthContextProvider>
  
     <BrowserRouter> 
     <Navbar />
      <Routes>
         <Route path="/" element={<Home />} exact/>
         <Route path="/login" exact element={<Login />} />
         <Route path="/signUP" exact element={<SignUp />} />
         <Route path="/account" exact element={
         <ProtectedRoute>
         <Account />
         </ProtectedRoute>} />
       </Routes>
    </BrowserRouter>
    </AuthContextProvider>
  
   </>
  );
}

export default App;
