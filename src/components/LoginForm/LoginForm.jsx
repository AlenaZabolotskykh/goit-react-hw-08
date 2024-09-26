import { Formik, Form, Field } from "formik";

export default function LoginForm() {
  return (
    <Formik initialValues={{ email: "", password: "" }}>
      <Form>
        <label>
          Email
          <Field name="email" type="email" />
        </label>
        <label>
          Password
          <Field name="pasword" type="password" />
        </label>

        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
