import Menubar from './components/shared/Menubar';
import { Route, Routes } from 'react-router';
import Home from './components/home/Home';
import Footer from './components/shared/Footer';
import './styles.css'
import AboutUs from './components/about/AboutUs';
import Contacts from './components/contact/Contacts';
import Service from './components/service/Service';
function App() {
  return (
    <div >
      {/* Shared */}
      <Menubar></Menubar>
      <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/about' element={<AboutUs></AboutUs>}></Route>
       <Route path='/contact' element={<Contacts></Contacts>}></Route>
       <Route path='/services' element={<Service></Service>}></Route>
      </Routes>
      {/* Footer section */}
      <Footer></Footer>
    </div>
  );
}

export default App;
