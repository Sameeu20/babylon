
import './Components/fontawesome';
import Home from './Components/Home';
import Aboutpage from './Components/Aboutpage'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import  Portfolio  from './Components/Portfolio';
import ServicePage from './Components/Servicepage';


function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<Aboutpage/>}/>
      <Route path='/portfolio' element = {<Portfolio/>}/>
      <Route path='/curtains&sofafabric' element = {<ServicePage/>}/>
      <Route path='/curtainsindubai' element = {<ServicePage/>}/>
      <Route path='/SofaUpholstery' element = {<ServicePage/>}/>
      <Route path='/curtains&sofafabric' element = {<ServicePage/>}/>
      <Route path='/curtains&sofafabric' element = {<ServicePage/>}/>
      <Route path='/curtains&sofafabric' element = {<ServicePage/>}/>
      <Route path='/curtains&sofafabric' element = {<ServicePage/>}/>
      <Route path='/curtains&sofafabric' element = {<ServicePage/>}/>
      <Route path='/curtains&sofafabric' element = {<ServicePage/>}/>
      <Route path='/curtains&sofafabric' element = {<ServicePage/>}/>
      <Route path='/curtains&sofafabric' element = {<ServicePage/>}/>

    </Routes>
   </BrowserRouter>
    
   </>
    
  );
}

export default App;
