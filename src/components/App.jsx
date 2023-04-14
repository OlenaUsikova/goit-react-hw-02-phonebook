import { Component } from "react";
import { ContactList } from "./contactsList/ContactsList";
import {AddContactForm} from "./addForm/AddContactsForm"
import {FindContactForm} from "./findContact/FindContactForm"
import {nanoid} from 'nanoid'


export class App extends Component {
  state = {
    contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filterStr: ''
  };

  addContact = data => {
    
    const newContact = {
      id: nanoid(),
      ...data,
    };
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };
  deleteContact = id => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(contact => contact.id !== id) };
    });
  };
  onChangeFind = filterStr => {
    this.setState(prevState => {
      return { name: prevState.name.toLowerCase().includes(this.state.filterStr.toLowerCase()) };
    });
  };
  
  render() { return(
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101'
      }}
    >
    <h1>Phonebook</h1>
    <AddContactForm addContact ={this.addContact}/>
    <h2>Contacts</h2>
    <FindContactForm onChangeFind={this.onChangeFind}/>
    <ContactList contacts = {this.state.contacts} deleteContact={this.deleteContact}/>
    </div>
  )
}}
