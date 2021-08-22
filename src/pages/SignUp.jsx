import React from "react";
import { useFormik } from "formik";
import { Button, Checkbox, Container, Form } from "semantic-ui-react";
import CandidateService from "../services/candidateService";
import * as Yup from "yup";

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
    const candidateService = new CandidateService();

    candidateService.addCandidate(values).then((result) => {
      console.log(result)
      formik.resetForm({values: { mail: '', password: '', nationalidentity: '', first_name:'',last_name: '', birth_of_year: '' }})
    }).catch(err => {
    console.log(err)
    formik.resetForm({values: { mail: '', password: '', nationalidentity: '', first_name:'',last_name: '', birth_of_year: '' }})})
  };

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
  };

  const validationSchema = Yup.object({
    mail: Yup.string().email("Invalid email format").required("Required!"),
    password: Yup.string()
    .required('No password provided.') 
    .min(6, 'Password is too short - should be 6 chars minimum.'),
    nationalidentity: Yup.string().required("Required!"),
    first_name: Yup.string().required("Required!"),
    last_name: Yup.string().required("Required!"),
    birth_of_year: Yup.string().required("Required!"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
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
                {formik.touched.mail && formik.errors.mail ? (
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
                  onBlur={formik.handleBlur}
                  type="password"
                />
                {formik.touched.password && formik.errors.password ? (
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
                  onBlur={formik.handleBlur}
                />
                {formik.touched.first_name && formik.errors.first_name ? (
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
                  onBlur={formik.handleBlur}
                />
                {formik.touched.last_name && formik.errors.last_name ? (
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
                  onBlur={formik.handleBlur}
                />
                {formik.touched.nationalidentity &&
                formik.errors.nationalidentity ? (
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
                  onBlur={formik.handleBlur}
                />
                {formik.touched.birth_of_year && formik.errors.birth_of_year ? (
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
