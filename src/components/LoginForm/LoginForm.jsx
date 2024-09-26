import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form>
        <label className={css.label}>
          Email
          <Field name="email" type="email" />
        </label>
        <label className={css.label}>
          Password
          <Field name="pasword" type="password" />
        </label>

        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
