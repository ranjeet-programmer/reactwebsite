import React from "react";
import {useState} from "react";
function Contact()
{
    const[data,setData] = useState({

        fullname : '',
        email : '',
        contact : '',
        msg : '',

    });

    function InputEvent(event)
    {
        const {name,value} = event.target;
        setData((preval) => {
            return{
                ...preval,
                [name] : value,
            }
        });
    }
    function formSubmit(e)
    {
        e.preventDefault();
        alert(`My Name is ${data.fullname},My Email is ${data.email},My Mobile Number is ${data.contact},my message is ${data.msg}`);
    }   
    return (<>
                <div className="my-5">
                        <h1 className="text-center">Contact US</h1>

                        <div className="container contact_div">
                            <div className="row">
                                <div className="col-md-6 col-10 mx-auto">
                                    <form onSubmit={formSubmit}>
                                    <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Name"  name="fullname" value={data.fullname} onChange={InputEvent}/>
                                    </div>

                                    <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Email"  name="email" value={data.email} onChange={InputEvent}/>
                                    </div>

                                    <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Contact"  name="contact" value={data.contact} onChange={InputEvent}/>
                                    </div>
                                    
                                    <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label" >Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
                                    </div>

                                    <div class="col-12">
                                      <button class="btn btn-outline-primary" type="submit">Submit form</button>
                                     </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                </div>
            </>)
}

export default Contact;