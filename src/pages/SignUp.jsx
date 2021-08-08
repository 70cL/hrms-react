import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Button, Checkbox, Container, Form } from "semantic-ui-react";
import CandidateService from "../services/candidateService";

export default function SignUp() {
  const initialValues = {
    mail: "",
    password: "",
    nationalidentity: "",
    first_name: "",
    last_name: "",
    birth_of_year: "",
  };

  const onSubmit = (values) => {
    console.log("form Data", values);
  }

  const validate = (values) => {
    let errors = {};

    if (!values.mail) {
      errors.mail = "Required";
      
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mail))
      errors.mail = "Invalid email format";

    if (!values.password) {
      errors.password = "Required";
    }

    if (!values.nationalidentity) {
      errors.nationalidentity = "Required";
    }

    if (!values.first_name) {
      errors.first_name = "Required";
    }

    if (!values.last_name) {
      errors.last_name = "Required";
    }

    if (!values.birth_of_year) {
      errors.birth_of_year = "Required";
    }

    return errors;
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div>
      <div>
        <Form onSubmit={formik.handleSubmit}>
          <Container>
            <div>
              <Form.Field width={5} style={{ marginLeft: "10cm" }}>
                <label>Email</label>
                <input
                  name="mail"
                  placeholder="mail"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.mail ? (
                  <div className="error">{formik.errors.mail}</div>
                ) : null}
              </Form.Field>
              <Form.Field width={5} style={{ marginLeft: "10cm" }}>
                <label>Password</label>
                <input
                  name="password"
                  placeholder="password"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.errors.password ? (
                  <div className="error">{formik.errors.password}</div>
                ) : null}
              </Form.Field>
              <Form.Field width={5} style={{ marginLeft: "10cm" }}>
                <label>First name</label>
                <input
                  name="first_name"
                  placeholder="first_name"
                  onChange={formik.handleChange}
                  value={formik.values.first_name}
                />
                {formik.errors.first_name ? (
                  <div className="error">{formik.errors.first_name}</div>
                ) : null}
              </Form.Field>
              <Form.Field width={5} style={{ marginLeft: "10cm" }}>
                <label>Last name</label>
                <input
                  name="last_name"
                  placeholder="last_name"
                  onChange={formik.handleChange}
                  value={formik.values.last_name}
                />
                {formik.errors.last_name ? (
                  <div className="error">{formik.errors.last_name}</div>
                ) : null}
              </Form.Field>
              <Form.Field width={5} style={{ marginLeft: "10cm" }}>
                <label>National Identity</label>
                <input
                  name="nationalidentity"
                  placeholder="nationalidentity"
                  onChange={formik.handleChange}
                  value={formik.values.nationalidentity}
                />
                {formik.errors.nationalidentity ? (
                  <div className="error">{formik.errors.nationalidentity}</div>
                ) : null}
              </Form.Field>
              <Form.Field width={5} style={{ marginLeft: "10cm" }}>
                <label>Birth of year</label>
                <input
                  name="birth_of_year"
                  placeholder="birth_of_year"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.errors.birth_of_year ? (
                  <div className="error">{formik.errors.birth_of_year}</div>
                ) : null}
              </Form.Field>
              <Form.Field width={5} style={{ marginLeft: "10cm" }}>
                <Checkbox label="I agree to the Terms and Conditions" />
              </Form.Field>
              <Button type="submit">Submit</Button>
            </div>
          </Container>
        </Form>
      </div>
    </div>
  );
}
