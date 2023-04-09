import React from "react";
import './styles/Home.css';
import img1 from './styles/images/icon-01.png'
import img2 from './styles/images/icon-02.png'
import img3 from './styles/images/icon-03.png'
export default function Home(){

    return (
        <div className="test">
           <div className="innertext">
            <h1>
                Gourment Coffee
            </h1>
            <div className="innertext-paragraph">
                <p>Where everything is found in one place</p>
            </div>
           </div>

           <div className="bodytext">
           <div class="container">
            <div className="headertext">
                <h1>Welcome</h1>
            </div>
            <div className="headertext">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            </div>
           </div>
           <div className="introduction">
            <div className="intro-container">
                <div className="intro-box">
                    <div className="img-box">
                        <img src={img1} alt=""></img>
                    </div>
                    <h3>Pastry</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="intro-box">
                <div className="img-box">
                        <img src={img2} alt=""></img>
                    </div>
                    <h3>Pastry</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="intro-box">
                <div className="img-box">
                        <img src={img3} alt=""></img>
                    </div>
                    <h3>Pastry</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
           </div>
        </div>
    );
}