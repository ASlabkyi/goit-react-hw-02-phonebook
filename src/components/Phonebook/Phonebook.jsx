import { Component } from 'react';
import { nanoid } from 'nanoid';

export class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFilterChange = e => {
    const { value } = e.target;

    this.setState({ filter: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { contacts, name, number } = this.state;
    const id = nanoid();
    const newContact = { id, name, number };
    this.setState({
      contacts: [...contacts, newContact],
      name: '',
      number: '',
    });
  };

  render() {
    const { contacts, name, number, filter } = this.state;
    return (
      <>
        <h1>Phone Book</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number:
            <input
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add Contact</button>
        </form>
        <h2>Contacts:</h2>

        <label>
          FInd contacts by name
          <input
            type="tel"
            name="filter"
            value={filter}
            placeholder="Type to search ..."
            onChange={this.handleFilterChange}
          />
        </label>

        <ul>
          {contacts
            .filter(({ name }) =>
              name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(({ id, name, number }) => (
              <li key={id}>
                {name}: {number}
              </li>
            ))}
        </ul>
      </>
    );
  }
}
