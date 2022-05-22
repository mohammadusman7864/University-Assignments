import React from 'react'
import './Card.css'
const Card = () => {
    return (
        <div style={{background:'grey'}} className="top">

            <div className="container">
                <div className="row">

                    <div className="col-sm-12 col-md-4">
                        <div class="card">
                            {/* <img src="..." class="card-img-top" alt="..."> */}
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <div class="card">
                            {/* <img src="..." class="card-img-top" alt="..."> */}
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <div class="card">
                            {/* <img src="..." class="card-img-top" alt="..."> */}
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Card