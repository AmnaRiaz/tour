import React from 'react';
import { NavLink } from 'react-router-dom';
// import home from '../src/img/home.jpg';

const Home = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 d-flex justify-content-center flex-column"></div>
                                <h1>
                                    Job Fills your pocket <br /> <strong className="high"> Adventoure Fill Your Soul</strong>
                                </h1>
                                <h2 className="my-3">
                                    Be a wonderlust, Collect moments not things
               </h2>
                                <div className="my-3">
                                    <NavLink to="/services" className="btn-check-now "> Check Now </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;