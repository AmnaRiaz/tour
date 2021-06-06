import React from 'react';
import { NavLink } from 'react-router-dom';
import home6 from '../src/img/home6.jpg';
const About = () => {
    return (
        <>
            <>
                <section id="header" className="d-flex align-items-center">
                    <div className="container-fluid ">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="row">
                                    <div className="col-md-6 pt-5 d-flex justify-content-center flex-column"></div>
                                    <h1>
                                        Wellcome to about page  <br /> <strong className="high"> Adventoure Fill Your Soul</strong>
                                    </h1>
                                    <h2 className="my-3">
                                        Collect moments not things
               </h2>
                                    <div className="my-3">
                                        <NavLink to="/contact" className="btn-check-now "> Contact Now  </NavLink>
                                    </div>
                                   {/* <div className="col-lg-6 order-1 order-lg-2">
                                            <img src={home6} alt="" />
                                   </div> */}

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </>

    )
}

export default About;