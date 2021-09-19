import React from "react";
import { Formik, Field, Form } from "formik";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import "./AutoForm.css"

const AutoForm = ({ updateData }) => {
  return (
    <div>
      <h1 className="space">Register  ______________</h1>
      <p className="space">As this website is still new, please follow the instructions on the Home page closley to ensure your course enrollment process goes smoothly. Thanks!</p>
      <Formik
        initialValues={{
          username: "",
          password: "",
          semester: "",
          phonenumber: "",
          email: "",
          othernumbers: ""
        }}
        onSubmit={async (values, { resetForm }) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          updateData(values);
          resetForm({ values: "" });
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

            <label htmlFor="othernumbers" className='input'>
              <Field id="othernumbers" className='input__field' name="othernumbers" type="text" />
              <span class="input__label">Friends Phone Number(s) (Separated by commas)</span>
            </label>

            <div className="prettyText">
              <label htmlFor="semester" className='input'>
                <label>Semester</label>
                <Field as="select" name="semester" className="dropdown">
                  <option value=""></option>
                  <option value="winter">Winter</option>
                  <option value="fall">Fall</option>
                </Field>
              </label>
            </div>


            <Stack component="form" noValidate spacing={3} >
              <TextField
                id="datetime-local"
                type="datetime-local"
                defaultValue="2021-09-16T10:30"

                sx={{ width: "50%", border: "solid 2px", borderRadius: "5px" }}
                InputLabelProps={{
                  shrink: true,
                }}

              />
            </Stack>


            <button className='form-input-btn' type="submit" >Submit</button>
          </Form>
        </div>
      </Formik>
    </div >
  );
};

export default AutoForm;
