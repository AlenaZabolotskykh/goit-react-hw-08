import { Formik, Form, Field } from "formik";
import css from "./RegisterForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label className={css.label}>
          Name
          <Field name="name" type="name" />
        </label>
        <label className={css.label}>
          Email
          <Field name="email" type="email" />
        </label>
        <label className={css.label}>
          Password
          <Field name="password" type="password" />
        </label>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
