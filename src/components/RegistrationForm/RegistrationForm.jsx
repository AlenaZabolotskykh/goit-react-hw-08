import { Formik, Form, Field } from "formik";

export default function RegistrationForm() {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
    >
      <Form>
        <label>
          Name
          <Field name="name" type="name" />
        </label>
        <label>
          Email
          <Field name="email" type="email" />
        </label>
        <label>
          Password
          <Field name="pasword" type="password" />
        </label>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
