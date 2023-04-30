import { Component } from 'react';
import { GlobalStyle } from './Utils/GlobalStyle';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ThemeProvider } from 'styled-components';
import { theme } from './Utils/Theme';
import { Layout } from './Layout/Layout';
import contacts from '../contacts';


export class App extends Component  {
  state = {
    contacts: [],
    filter: '',
  };

  // render > didMount > getItem > setState > update > render > didUpdate > setItem

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    } else {
      this.setState({contacts: contacts})
    }
  };

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  addContact = newContact => {
    const { contacts } = this.state;

    const checkContactName = contacts
      .find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());

    if (checkContactName) {
      alert(`${newContact.name} is allready in contact!`)
      return
    } else {
      this.setState(pervState => ({
        contacts: [...pervState.contacts, newContact]
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(pervState => ({
      contacts: pervState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value})
  };

  render() {
    const { filter, contacts } = this.state;

    let normalizedFilter = filter.toLowerCase();

    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));


    return(
      <ThemeProvider theme={theme}>
        <Layout>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
        <GlobalStyle />
        </Layout>
    </ThemeProvider>
  );
  }; 
};