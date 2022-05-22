import React from 'react';
import shoes1 from '../../assets/shirt.jpg'
import book1 from '../../assets/book.jpg'
import './Service.css'


function Service() {
    return (
        <div>

            <div className="container">
                <div class="row">

                    <div className="col-md-4">
                        <div className="card">
                            <div className="card_body">
                                <img src={shoes1} alt="" />
                                <h2 className="card_title">Shoes Shop</h2>
                                <p className="card_desc" style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est?</p>
                            </div>
                            <div className="btn" style={{color: 'black', backgroundColor: 'orange', padding: '10px'}}>Add to cart</div>
                            
                        </div>

                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <div className="card_body">
                                <img src={shoes1} alt="" />
                                <h2 className="card_title">Shoes Shop</h2>
                                <p className="card_desc" style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est?</p>
                            </div>
                            <div className="btn" style={{color: 'black', backgroundColor: 'orange', padding: '10px'}}>Add to cart</div>

                        </div>

                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <div className="card_body">
                                <img src={book1} alt="" />
                                <h2 className="card_title">Shoes Shop</h2>
                                <p className="card_desc" style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est?</p>
                            </div>
                            <div className="btn" style={{color: 'black', backgroundColor: 'orange', padding: '10px'}}>Add to cart</div>

                        </div>

                    </div>

                    <div class="col">
                        <div class="card">
                            <img src={book1} style={{ width: '200px' }} class="card-img-top" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla praesentium provident minima ullam eaque dicta, itaque perspiciatis obcaecati. Blanditiis voluptates consectetur officiis soluta vero. Esse saepe alias praesentium unde!</p>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla praesentium provident minima ullam eaque dicta, itaque perspiciatis obcaecati. Blanditiis voluptates consectetur officiis soluta vero. Esse saepe alias praesentium unde!</p>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla praesentium provident minima ullam eaque dicta, itaque perspiciatis obcaecati. Blanditiis voluptates consectetur officiis soluta vero. Esse saepe alias praesentium unde!</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Service;