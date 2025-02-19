
import {Routes,Route} from 'react-router-dom'
import LandingPage from './Pages/UserPages/LandingPage';
import LoginPage from './Pages/UserPages/LoginPage';
import RegisterPage from './Pages/UserPages/RegisterPage';



function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
    </Routes>
    
   </>
    
  );  
}

export default App;
           