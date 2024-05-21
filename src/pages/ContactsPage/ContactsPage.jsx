// приватний маршрут для роботи зі списком
// контактів користувача, на якому рендериться
// компонент сторінки ContactsPage.

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import PageTitle from '../../components/PageTitle/PageTitle';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
// import TaskEditor from '../../components/TaskEditor/TaskEditor';
// import { fetchTasks } from '../../redux/tasks/operations';
// import { selectLoading } from '../../redux/tasks/selectors';
// import { selectError } from '../../redux/tasks/selectors';

export default function TasksPage() {
  //   const dispatch = useDispatch();

  //   const isLoading = useSelector(selectLoading);
  //   const isError = useSelector(selectError);

  //   useEffect(() => {
  //     dispatch(fetchContacts());
  //   }, [dispatch]);

  return (
    <>
      <PageTitle>Your contacts</PageTitle>
      {/* <TaskEditor /> */}
      {/* <div>{isLoading && 'Request in progress...'}</div> */}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}
