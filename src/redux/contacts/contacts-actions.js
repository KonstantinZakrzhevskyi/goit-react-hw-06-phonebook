import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/filter');

const actions = { addContact, deleteContact, changeFilter };

export default actions;
