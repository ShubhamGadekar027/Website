import React from "react";

const Header = () => {
    return(
        <>
        <header>
            <section className="container main-hero-container">
                <div className="row">
                    <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column      align-items-start">
                        <h1 className="display-2">Online Payment Made <br/>Easy For You</h1>
                        <p className="main-hero-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis saepe minima, exercitationem modi placeat sit aperiam, possimus harum molestiae sint, facere iusto quis consectetur neque magni veniam earum ipsam dolore?
                        </p>
                        <h3>Get early access for you</h3>
                        <div className="input-group mt-3">
                            <input type="text" className="rounded-pill w-75 me-3 p-2 form-control-text" placeholder="Enter your Email"/>
                            <div className="input-group-button">Get it Now</div>

                        </div>
                        
                    </div>
                    <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-images">
                        <img src="./images/payment2.jpg" alt="paymentImage" className="img-fluid"/>
                        {/* <img src="./images/payment.jpg" alt="paymentImage" className="img-fluid"/> */}
                    </div>

                </div>


            </section>
        </header>
        </>
    );
};

export default Header;