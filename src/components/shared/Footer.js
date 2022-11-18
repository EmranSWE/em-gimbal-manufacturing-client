import React from 'react';
import { Link } from 'react-router-dom';
import shopus from '../../Assets/payment.png'
const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
                <span className="footer-title">Our Company</span>
                <Link to='/'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/'>Environment</Link>
                <Link to='/'>Mission and strategy</Link>

               
            </div>
            <div>
                <span className="footer-title">Production</span>
                <Link to='/'>Technology</Link>
                <Link to='/'>Products</Link>
                <Link to='/'>Quality</Link>
                <Link to='/'>Environment</Link>
            </div>

            <div>
                <span className="footer-title">Contact us</span>
                <Link to='/contact'>Contact Us</Link>
                <Link to='/'>Address of factories</Link>
                <Link to='/'>Dealers</Link>
                <Link to='/'>Trading House</Link>
                <Link to='/'>Brand Shop</Link>
             
            </div>
            <div>
                <span className="footer-title">Shop with us</span>
                <img src={shopus} alt="shop us" />
               <p>Manufacturer  Factory,Industral,
                <br /> Manufacturing Website</p>
            </div>
        </footer>
    );
};

export default Footer;