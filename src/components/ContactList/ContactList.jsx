import { useSelector } from 'react-redux';
// виправити імпорт селектора,
// import { selectVisibleContacts } from '../../redux/contacts/slice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() {
  // const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      <ul className={css.list}>
        {/* {contacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <Contact data={contact} />
          </li>
        ))} */}
      </ul>
    </>
  );
}
