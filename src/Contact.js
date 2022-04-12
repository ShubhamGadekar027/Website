import React from "react";

const Contact = () => {
    return (
        <>
        <section className="contactus-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                        <div className="row">
                            <div className="contact-leftside col-12 col-lg-5">
                                <h1 className="main-heading fw-bold" >Connect With Our <br/> Sales Team</h1>
                                <p className="main-hero-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quidem nesciunt perferendis quas ab ducimus error autem dolores doloribus totam?</p>
                                <figure>
                                    <img src="./images/Contact.jpg" alt="ContactImg" className="img-fluid"/>
                                </figure>
                            </div>
                            {/* For right section */}
                            <div className="contact-rightside col-12 col-lg-7">
                                <form method="POST">
                                    <div className="row">
                                        <div className="col-12 col-lg-6 contact-input-feild">
                                            <input type="text" name="" id="" class="form-control" placeholder="First Name"/>
                                        </div>
                                        <div className="col-12 col-lg-6 contact-input-feild">
                                            <input type="text" name="" id="" class="form-control" placeholder="Last Name"/>
                                        </div>

                                        <div className="col-12 col-lg-6 contact-input-feild">
                                            <input type="text" name="" id="" class="form-control" placeholder="Phone Number"/>
                                        </div>
                                        <div className="col-12 col-lg-6 contact-input-feild">
                                            <input type="text" name="" id="" class="form-control" placeholder="Your Email"/>
                                        </div>

                                    </div>
                                    {/* For Next Row */}
                                    <div className="row">
                                        <div className="col-12 contact-input-feild">
                                            <input type="text" name="" id="" class="form-control" placeholder="Enter the Address"/>
                                        </div>
                                    </div>
                                    {/* For Next Row */}
                                    <div className="row">
                                        <div className="col-12">
                                            <input type="text" name="" id="" class="form-control" placeholder="Enter your Message"/>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="form-check form-checkbox-style">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                            <label class="form-check-label" className="main-hero-para">
                                                I agree that Reactpay may contact me at the email address and phone number above.
                                            </label>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-style w-100">
                                        Submit

                                    </button>
                                    

                                    

                                </form>

                            </div>


                        </div>

                    </div>

                </div>

            </div>


        </section>
        
        
        
        
        </>
    );
}

export default Contact;