import Menubar from './components/shared/Menubar';
import { Route, Routes } from 'react-router';
import Home from './components/home/Home';
import Footer from './components/shared/Footer';
import './styles.css'
import AboutUs from './components/about/AboutUs';
import Contacts from './components/contact/Contacts';
import Service from './components/service/Service';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Products from './components/Products/Products';
import RequireAuth from './components/Login/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/dashboard/Dashboard';
import MyPurchase from './components/dashboard/MyPurchase';
import MyReview from './components/dashboard/MyReview';
import MyHistory from './components/dashboard/MyHistory';
import ProductPurchase from './components/Products/ProductPurchase';
import Users from './components/dashboard/Users';
import RequireAdmin from './components/Login/RequireAdmin';
import MyProfile from './components/dashboard/MyProfile';
import AddProduct from './components/dashboard/AddProduct';

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
       <Route path='/shop' element={
        <RequireAuth>
          <Products></Products>
        </RequireAuth>
       }></Route>
       <Route path='/products/:id' element={<ProductPurchase></ProductPurchase>}></Route>
       <Route path='/services' element={<Service></Service>}></Route>
       <Route path='/dashboard' element={<RequireAuth>
        <Dashboard></Dashboard>
       </RequireAuth>
       }> 
      <Route index element={<MyPurchase></MyPurchase>}></Route>   
      <Route path='review' element={<MyReview></MyReview>}></Route>     
      <Route path='profile' element={<MyProfile></MyProfile>}></Route>     
      <Route path='history' element={<MyHistory></MyHistory>}></Route>     
      <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>     
      <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>     
       </Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      {/* Footer section */}
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
