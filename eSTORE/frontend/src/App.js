 
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/contact';
import PageNotFound from './pages/pageNotFound';
import Register from './pages/Authentication Pages/register';




function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
   
 
    </>
  );
}

export default App;
