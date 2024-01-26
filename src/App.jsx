
import './Components/fontawesome';
import Home from './Components/Home';
import Aboutpage from './Components/Aboutpage'
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<Aboutpage/>}/>
    </Routes>
   </BrowserRouter>
    
   </>
    
  );
}

export default App;
