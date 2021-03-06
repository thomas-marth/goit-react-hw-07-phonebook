import { createAction } from "@reduxjs/toolkit";

const addContactsRequest = createAction("contacts/addRequest");
const addContactsSuccess = createAction("contacts/addSuccess");
const addContactsError = createAction("contacts/addError");

const getContactsRequest = createAction("contacts/getRequest");
const getContactsSuccess = createAction("contacts/getSuccess");
const getContactsError = createAction("contacts/getError");

const removeContactsRequest = createAction("contacts/removeRequest");
const removeContactsSuccess = createAction("contacts/removeSuccess");
const removeContactsError = createAction("contacts/removeError");

const getFilterValue = createAction("contacts/changeFilter");

export {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
  getFilterValue,
};
