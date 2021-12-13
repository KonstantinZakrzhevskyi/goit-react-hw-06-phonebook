import { useSelector, useDispatch } from 'react-redux';
import actions from 'redux/contacts/contacts-actions';
import { getVisidleContacts } from 'redux/contacts/contacts-selectors';

import s from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(getVisidleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(actions.deleteContact(id));

  return (
    <ul className={s.contact__list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.contact__item} key={id}>
          <p className={s.contact__text}>{name}:</p>
          <p className={s.contact__text}>{number}</p>
          <button
            className={s.contact__btn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
