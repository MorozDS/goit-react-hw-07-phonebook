import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsloading = state => state.contacts.isLoading;
export const selectFilter = state => state.filter;
export const selectError = state => state.contacts.error;

export const renderContactList = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return filter
      ? contacts.filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  }
);
