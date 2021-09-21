import React from "react";
import image from "./images/contactus.jpg";
//To import library
import { useForm } from "react-hook-form";
import "./Home.css";

const Contact = () => {
  //We can say here are the conents/function we want to import
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  // to get the entered data
  const onSubmit = (data, e) => {
    console.log(data);
    // To clear form field after submit
    e.target.reset();
  };

  //It will automatically check whether which flied is wrongly filled
  const onError = (data) => {
    console.log(data);
  };
  return (
    <>
      <h1 className="containerhead"> Get Started With Us</h1>
      <div className="formcontainer">
        <div className="form-left ">
          <img src={image} alt="Contact us" />
        </div>

        {/* --------------------------Form is started from here-------------- */}
        <div className="form-right">
          {/* Handlesubmit is the keyword from the react-hooks-form  and is used to handle the onSubmit event  */}
          <form className="form" onSubmit={handleSubmit(onSubmit, onError)}>
            {/* <h1 className="containerhead">Register Youself</h1> */}
            <label htmlFor="username">
              UserName <span className="danger">*</span>
            </label>
            <div className="forminput">
              {/* In every field we give the className of form control and another
              class which technically make decision like it will give a class of
              in valid untill the user not entered the accepted value it is
              called when the field is on or underWork
              .
              .
              .
              .
              {...register("name of value", { required: " value is required" })}
               is basically the way of writing a field which is required
               we can write different rules we want for a form field  
              */}
              <input
                className={`form-control  ${errors.name && "invalid"}`}
                type="text"
                name="username"
                placeholder="UserName..."
                autoComplete="off"
                {...register("name", { required: "User Name is required" })}
              />
              {/* We use the following state in every field bcoz it is gonna display the error msg
              ... 
              &&... symbol is used to determine that the msg will show only if the field contain error content */}
              {errors.name && (
                <p>
                  <small className="danger">{errors.name.message}</small>
                </p>
              )}
            </div>
            <label htmlFor="password">
              Password<span className="danger"> *</span>
            </label>
            <div className="forminput">
              <input
                type="password"
                name="password"
                className={`form-control  ${errors.password && "invalid"}`}
                placeholder="Password..."
                autoComplete="off"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              {errors.password && (
                <p>
                  <small className="danger">{errors.password.message}</small>
                </p>
              )}
            </div>

            <label htmlFor="email">
              Email<span className="danger"> *</span>
            </label>
            <div className="forminput">
              <input
                type="email"
                name="email"
                className={`form-control  ${errors.email && "invalid"}`}
                placeholder="Email..."
                autoComplete="off"
                // As i stated above that we can write different rules we want for a form field so we use another constraint
                //  which is gonna check the field content through REGULAR EXPRESSION
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                //oN Key is used used to check field content side by side
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <p>
                  <small className="danger">{errors.email.message}</small>
                </p>
              )}
            </div>
            <button className="service-signup-btn" type="submit">
              Signup
            </button>
            <span>
              <p>
                Already have an account?{" "}
                <a href="#" className="danger">
                  Login
                </a>
              </p>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
