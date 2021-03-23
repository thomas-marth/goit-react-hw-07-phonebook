import { createSelector } from "@reduxjs/toolkit";

const getContactsItems = (state) => state.contacts.items;

const getContactsFilter = (state) => state.contacts.filter;

const getFilteredContacts = createSelector(
  [getContactsItems, getContactsFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

const selectors = { getContactsItems, getContactsFilter, getFilteredContacts };

export default selectors;
