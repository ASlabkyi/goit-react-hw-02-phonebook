import { Component } from 'react';

import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Container } from './Phonebook.styled';

export class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = newContact => {
    const { contacts } = this.state;

    const isDuplicate = contacts.some(
      contact => contact.name === newContact.name
    );
    if (isDuplicate) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));
  };

  handleFilterChange = e => {
    const { value } = e.target;

    this.setState({ filter: value });
  };

  deleteContact = id =>
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));

  render() {
    const { contacts, filter } = this.state;
    return (
      <Container>
        <h1>Phone Book</h1>

        <ContactForm addContact={this.handleAddContact}></ContactForm>

        <h2>Contacts:</h2>

        <Filter
          filter={filter}
          handleFilterChange={this.handleFilterChange}
        ></Filter>

        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={this.deleteContact}
        ></ContactList>
      </Container>
    );
  }
}
