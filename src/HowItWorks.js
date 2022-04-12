import React, { useState } from "react";
import workapi from "./API/WorkApi";

const HowItWorks = () =>{

    const [workData, setWorkData] = useState(workapi);
    //console.log(workData);

    return(
        <>
        <section>
            <div className="work-container container">
                <h1 className="main-heading text-center">How does it Work</h1>
                <div className="row">
                    {
                        workData.map((currElem) => {
                            // const {id, logo, title, info} = currElem;  => object destructuring
                            return(
                                <>
                                 <div className="col-12 col-lg-4 text-center work-container-subdiv">
                                    <i class={`fontawesome-style ${currElem.logo}`}></i>
                                    <h2 className="sub-heading">{currElem.title}</h2>
                                    <p className="heading-desc">  {currElem.info} </p>
                                </div>
                                </>
                            );
                        })

                    }
                </div>
            </div>
        </section>
        
        </>
    );
}

export default HowItWorks;