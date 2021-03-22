import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactListItem.module.css";

const ContactListItem = ({ contact, removeItem }) => {
  return (
    <li data-id={contact.id} className={styles.contactListItem}>
      <h4>
        <span>👥 </span>
        {contact.name}
      </h4>
      <h4>
        <span>📞</span> {contact.number}
      </h4>
      <button
        type="button"
        id={contact.id}
        onClick={() => removeItem(contact.id)}
      >
        х
      </button>
    </li>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  contact: PropTypes.object,
};
