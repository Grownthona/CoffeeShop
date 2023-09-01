import React from "react";
import './styles/Home.css';
import { Link } from 'react-router-dom';
import img1 from './styles/images/facebook.png'
import img2 from './styles/images/instagram.png'
import img4 from './styles/images/pinterest.png'
import bg1 from './styles/images/coffee-02.jpg'
import bg2 from './styles/images/1.jpg'
import bg3 from './styles/images/coffee-03.jpg'
import waffle from './styles/images/waffle-02.jpg'
import cake from './styles/images/cake.jpg'
import logo from './styles/images/dough-boi-bakery-logo-dark.png'
import coffee from './styles/images/coffee.jpg'
import cake2 from './styles/images/cake-02.jpg'
export default function Home(){

    return (
        <div>
           <div className="navbar">
                <div className="navbar-logo" href="#"><Link to="/"><img src={logo} alt="logo"/></Link></div>
                <ul className="navbar-menu">
                    <li><Link to="/products">Menu</Link></li>
                    <li><Link to="/products">Contract</Link></li>
                    <li><Link to="/products">About Us</Link></li>
                </ul>
                <ul className="navbar-social">
                    <div className="social-link"><a href="https://www.facebook.com/"><img src={img1} alt="facebook"/></a></div>
                    <div className="social-link"><a href="https://www.instagram.com/"><img src={img2} alt="Instagram"/></a></div>
                    <div className="social-link"><a href="https://www.pinterest.com/"><img src={img4} alt="Social Icon 3"/></a></div>
                </ul>
            </div> 
            <div className="background">
                <div className="bg-container">
                    <div className="bg-txt">
                        <div className="header">
                            <p>The Art of Bakery!</p>
                            <h1>Crusty and chic</h1>
                        </div>
                        <div className="elementor-divider">
                            <div className="elementor-divider-container"></div>
                        </div>
                        <div className="header-body">
                            <p>Step inside and let your senses be serenaded by the scent of freshly baked goodness. Our passion for baking is your pleasure. Come and discover a world of irresistible treats that define the essence of indulgence.</p>
                        </div>
                    </div>
                    <div className="bg-img">
                        <img src={bg1} alt="background"/>
                    </div>
                    <div className="bg-img">
                        <img src={bg2} alt="background"/>
                        <img src={bg3} alt="background"/>
                    </div>
                </div>
            </div>

            <div className="special">
                <div className="special-container">
                    <div className="special-header">
                        <h2>Our's Special</h2>
                        <p>The time has come to bring those ideas and plans to life. This is where we really begin to visualize.</p>
                    </div>
                    <div className="special-item-container">
                        <div className="special-item-box">
                            <div className="item-box-container">
                                <h3>Waffle</h3>
                                <p>Mango, Passion Fruit, Pineapple and Coconut All Blended with Ice.</p>
                            </div>
                        </div>
                        <div className="special-item-box">
                            <img src={waffle} alt="special-item"/>
                        </div>
                        <div className="special-item-box">
                            <div className="item-box-container">
                                <h3>Choclate Cake</h3>
                                <p>Choclate, Nutella,Peanuats and Coconut All mixed together.</p>
                            </div>
                        </div>
                        <div className="special-item-box">
                            <img src={cake} alt="special-item"/>
                        </div>
                        <div className="special-item-box">
                            <img src={coffee} alt="special-item"/>
                        </div>
                        <div className="special-item-box">
                            <div className="item-box-container">
                                <h3>Hot Choclate</h3>
                                <p>Coffee, Nutella,Peanuats and Coconut All mixed together.</p>
                            </div>
                        </div>
                        
                        <div className="special-item-box">
                            <img src={cake2} alt="special-item"/>
                        </div>
                        <div className="special-item-box">
                            <div className="item-box-container">
                                <h3>Hot Choclate</h3>
                                <p>Coffee, Nutella,Peanuats and Coconut All mixed together.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}