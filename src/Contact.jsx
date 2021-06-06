import React, { useState } from 'react';

const Contact = () => {


    const [data, Setdata] = useState({
        name: "",
        number: "",
        email: "",
        message: "",
    })

    const inputevent = (event) => {

        const { name, value } = event.target;

        Setdata((preval) => {
            return {
                ...preval,
            [name] : value,
            }
    })
}
const formsubmit = () => {
        
}
return (
    <>
        <div className="my-5">
            <div className="text-center"> Contact Us
    </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formsubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label"> Enter Your Name</label>

                                <input type="name"

                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="Name"
                                    value={data.Name }
                                    onChange={inputevent}
                                    placeholder=" Your Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Enter Your Phone Nmber </label>
                                <input type="number"

                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name=" Nmber"
                                    value={data.Number }
                                    onChange={inputevent}
                                    placeholder=" Your Phone Nmber" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    value={ data.email}
                                    onChange={inputevent}
                                    placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                <textarea class="form-control"
                                    id="exampleFormControlTextarea1"
                                    name="message"
                                    value={data.message }
                                    onChange={inputevent}
                                    rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Submit </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </>

)
}

export default Contact;