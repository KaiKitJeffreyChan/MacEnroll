import React from 'react'
import axios from "axios";
import { Formik, Field, Form } from "formik";
import "./AutoForm.css"

const EditForm = () => {
    const deleteUser = ({ user }) => {
        console.log(user)
        return axios
            .delete(`http://172.17.137.120:80/courses/${user}`)
            .then(
                (response) => {
                    console.log(response);
                },
                (error) => {
                    console.log(error);
                }
            );
    }
    return (
        <div>
            <h1 className="space">Delete  ______________</h1>
            <p className="space">If you have currently enrolled in MacEnroll and would like to stop, just enter you MacID!</p>
            <Formik
                initialValues={{
                    macid: "",
                }}
                onSubmit={async (values, { resetForm }) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    deleteUser(values)
                    resetForm({ values: "" });
                }}
            >
                <div className='form-content-left'>
                    <Form>
                        <label htmlFor="macid" className='input'>
                            <Field id="macid" className='input__field' name="macid" type='text' />
                            <span class="input__label">MacID</span>
                        </label>
                        <button className='form-input-btn' type="submit" >Submit</button>
                    </Form>
                </div>
            </Formik>
            <h1 className="bottomrightspace">Check  _________________</h1>
            <p className="space">Enter your MacID to get an update via SMS and Email!</p>
            <Formik
                initialValues={{
                    macid: "",
                }}
                onSubmit={async (values, { resetForm }) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    deleteUser(values)
                    resetForm({ values: "" });
                }}
            >
                <div className='form-content-left'>
                    <Form>
                        <label htmlFor="macid" className='input'>
                            <Field id="macid" className='input__field' name="macid" type='text' />
                            <span class="input__label">MacID</span>
                        </label>
                        <button className='form-input-btn' type="submit" >Submit</button>
                    </Form>
                </div>
            </Formik>
        </div>
    )
}

export default EditForm
