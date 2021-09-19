import React from "react";
import { Formik, Field, Form } from "formik";
import "./AutoForm.css"

const AutoForm = ({ updateData }) => {
  return (
    <div>
      <h1 className="space">Register______________</h1>
      <p className="space">As this website is still new, please follow the instructions on the Home page closley to ensure your course enrollment process goes smoothly. Thanks!</p>
      <Formik
        initialValues={{
          username: "",
          password: "",
          semester: "",
          phonenumber: "",
          email: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          updateData(values);
        }}
      >
        <div className='form-content-left'>
          <Form>

            <label htmlFor="username" className='input'>
              <Field id="username" className='input__field' name="username" type='text' />
              <span class="input__label">Username</span>
            </label>
            <label htmlFor="password" className='input'>
              <Field id="password" className='input__field' name="password" type='password' />
              <span class="input__label">Password</span>
            </label>
            <label htmlFor="phonenumber" className='input'>
              <Field id="phonenumber" className='input__field' name="phonenumber" />
              <span class="input__label">Phone Number (ex. 6472893489)</span>
            </label>

            <label htmlFor="email" className='input'>
              <Field id="email" className='input__field' name="email" type="email" />
              <span class="input__label">Email</span>
            </label>

            <label htmlFor="semester" className='input'>
              <label className="prettyText">Semester</label>
              <Field as="select" name="semester" className="dropdown">
                <option value=""></option>
                <option value="winter">Winter</option>
                <option value="fall">Fall</option>
              </Field>

            </label>

            <button className='form-input-btn' type="submit">Submit</button>
          </Form>
        </div>
      </Formik>
    </div >
  );
};

export default AutoForm;
