import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    const { filteredContacts, deleteContact } = this.props;

    return (
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button type="button" onClick={() => deleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
