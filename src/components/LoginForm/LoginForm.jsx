import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
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
          <Field name="password" type="password" />
        </label>

        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
