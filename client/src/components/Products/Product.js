import React from "react";
import './Product.css';
//import img1 from './images/icon-01.png'

export default function Product(){
    return (
        <div>
            <div className="container">
                <div className="filter-box">

                </div>
                <div className="product-box">
                    <div className="card">
                    <img src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div className="card-body">
                            <div className="row">
                                <div className="card-title">
                                    <h4>Expresso</h4>
                                    <h4>$120</h4>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,dignissimos.</p>
                            <div className="btn-group">
                                <div className="btn">
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                    <img src="https://images.pexels.com/photos/7658124/pexels-photo-7658124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div className="card-body">
                            <div className="row">
                                <div className="card-title">
                                    <h4>Capacinno</h4>
                                    <h4>$120</h4>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,dignissimos.</p>
                            <div className="btn-group">
                                <div className="btn">
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                    <img src="https://images.pexels.com/photos/11969481/pexels-photo-11969481.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                        <div className="card-body">
                            <div className="row">
                                <div className="card-title">
                                    <h4>Cold Coffee</h4>
                                    <h4>$120</h4>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,dignissimos.</p>
                            <div className="btn-group">
                                <div className="btn">
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                    <img src="https://images.pexels.com/photos/374147/pexels-photo-374147.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div className="card-body">
                            <div className="row">
                                <div className="card-title">
                                    <h4>Nike Sneaker</h4>
                                    <h4>$120</h4>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,dignissimos.</p>
                            <div className="btn-group">
                                <div className="btn">
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}