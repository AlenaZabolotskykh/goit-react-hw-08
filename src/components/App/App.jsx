import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Layot from "../Layot/Layot";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);

export default function App() {
  return (
    <Layot>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </Layot>
  );
}

// // import { useState, useEffect } from "react";
// import "./App.css";
// import ContactForm from "../ContactForm/ContactForm";
// import SearchBox from "../SearchBox/SearchBox";
// import ContactList from "../ContactList/ContactList";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { fetchContact } from "../../redux/contacts/operations";
// import { selectIsLoading, selectError } from "../../redux/contacts/selectors";

// export default function App() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContact());
//   }, [dispatch]);

//   return (
//     <>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       {isLoading && !error && <p>Loading...</p>}
//       <SearchBox />
//       <ContactList />
//     </>
//   );
// }
