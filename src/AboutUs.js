import React, { useState } from "react";
import HowToUse from "./API/HowToUse";

const AboutUs = () => {

    const [dataApi, setDataApi] = useState(HowToUse);

    return (
        <>
        <section className="common-section our-services">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                        <img src="./images/payment3.jpg" alt="aboutus"/>
                        {/* For right side */}
                    </div>    
                    <div className="col-12 col-lg-7 our-services-list ">
                        <h3 className="mini-title">-- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY</h3>
                        <h1 className="main-heading">How to use the App?</h1>
                   
                        {dataApi.map((currElem) => {
                            return (
                                <>
                                <div className="row our-services-info">
                                    <div className="col-1 our-services-number">{currElem.id}</div>
                                    <div className="col-10 our-service-data">
                                        <h2>{currElem.title}</h2>
                                        <p className="main-hero-para">{currElem.info}</p>
                                    </div>
                                </div>
                                </>
                            );
                        })}

                        <br/>
                        <div>
                            <button className="btn-style">learn more</button>
                        </div>
                    </div>

                </div>

            </div>
        </section>

        {/* Second part of about us section */}

        <section className="common-section our-services-rightside">
            <div className="container mt-5">
                <div className="row">
                      
                    <div className="col-12 col-lg-7 our-services-rightside-content d-flex flex-column ">
                        <h3 className="mini-title">-- SUPPORT IN ANY LANGUAGES</h3>
                        <h1 className="main-heading">Workd class support is available 24/7</h1>
                   
                        {dataApi.map((currElem) => {
                            return (
                                <>
                                <div className="row our-services-info" key={currElem.id}>
                                    <div className="col-1 our-services-number">{currElem.id}</div>
                                    <div className="col-10 our-service-data">
                                        <h2>{currElem.title}</h2>
                                        <p className="main-hero-para">{currElem.info}</p>
                                    </div>
                                </div>
                                </>
                            );
                        })}

                        <br/>
                        <div>
                            <button className="btn-style">learn more</button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 our-service-img">
                        <img src="./images/callCenter.jpg" alt="aboutus"/>
                        {/* For right side */}
                    </div>  
                </div>
            </div>
        </section>      
        </>

    );

}

export default AboutUs;