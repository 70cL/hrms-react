import { useFormik } from "formik";
import React from "react";
import { Button, Checkbox, Container, Form } from "semantic-ui-react";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      mail: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("form Data", values);
    },
    validate: (values) => {
      let errors = {};

      if (!values.mail) {
        errors.mail = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mail)
      )
        errors.mail = "Invalid email format";
      if (!values.password) {
        errors.password = "Required";
      }

      return errors;
    },
  });

  console.log("formik", formik.errors);

  return (
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
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </div>
        </Container>
      </Form>
    </div>
  );
}
