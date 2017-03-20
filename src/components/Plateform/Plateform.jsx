import React from "react";
import { Link } from 'react-router'


const Plateform = () => (
  <div className="container mt-4 ">
    <div className="row justify-content-center ">
      <form  className="form-signin col-10 col-sm-8 col-md-6 col-lg-4 ">
        <h2 className="form-signin-heading mb-4 text-center">
          Choose how you want to do
        </h2>
        <button className="btn btn-lg btn-primary btn-block" >
          <Link to="/form">Send</Link>
        </button>
        <button className="btn btn-lg btn-primary btn-block" >
          Edit
        </button>
        <button className="btn btn-lg btn-primary btn-block" >
          Delete
        </button>
      </form>
    </div>

  </div>
);

export default Plateform;
