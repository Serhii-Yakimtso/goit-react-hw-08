// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectLoading, selectError } from '../../redux/contacts/slice';
// import { fetchContacts } from '../../redux/contacts/operations';
// import ContactList from '../ContactList/ContactList';
// import SearchBox from '../SearchBox/SearchBox';
// import ContactForm from '../ContactForm/ContactForm';

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
);
// === create NotFoundPage???
// const NotFoundPage = lazy(() =>
//   import('../../pages/NotFoundPage/NotFoundPage')
// );

import css from './App.module.css';

// function App() {
//   const dispatch = useDispatch();

//   const isLoading = useSelector(selectLoading);
//   const isError = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <>
//       <div className={css.wrapper}>
//         <h1>Phonebook</h1>
//         {isLoading && <p>Loading...</p>}
//         {isError && <p>error...</p>}
//         <ContactForm />
//         <SearchBox />
//         <ContactList />
//       </div>
//     </>
//   );
// }

function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
