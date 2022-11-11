import Menubar from './components/shared/Menubar';
import { Route, Routes } from 'react-router';
import Home from './components/home/Home';
import Footer from './components/shared/Footer';
import './styles.css'
function App() {
  return (
    <div >
      {/* Shared */}
      <Menubar></Menubar>
      <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
      {/* Footer section */}
      <Footer></Footer>
    </div>
  );
}

export default App;
