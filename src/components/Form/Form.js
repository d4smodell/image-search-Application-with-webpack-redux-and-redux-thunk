import React from "react";
import { Field, reduxForm } from "redux-form";
import "./Form.module.scss";
import { required, maxLengthCreator } from "./Validators/validators";

let maxLength = maxLengthCreator(20)

let ContactForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className="form">
      <h1 className="title">Image Search Application</h1>
      <Field
        component={"input"}
        placeholder="Search for photos"
        name={"searchValue"}
        className="input"
        validate={[required, maxLength]}
      />
      <button className="btn">Search</button>
    </form>
  );
};

ContactForm = reduxForm({
  form: "contact",
})(ContactForm);

export default ContactForm;
