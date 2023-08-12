import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
const SignUp = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-control"
                />
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                />
                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  className="form-control"
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control mt-1"
                />
                <div>
                  <div className="mt-3 d-flex justify-content-between align-items-center gap-20">
                    <Link className="button border-0 text-white">Sign Up</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
