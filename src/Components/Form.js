import React, { Component } from 'react';
import "./Form.css";
import ContactList from './ContactsList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import shortid from "shortid"

class Form extends Component {
    inputId = shortid.generate();
    state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}

    onInputChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    };

    onSearchInput = evt => {
        this.setState({ filter: evt.target.value })
        const userName = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter))
        
        this.setState({contacts: [...userName]})
    };

    handleSubmit = evt => {
        evt.preventDefault();

        this.addContact(this.state.name, this.state.number);
        this.setState({ name: "", number: "" });
    };

    addContact = (valueName, valueNumber) => {
        const contactId = shortid.generate()
        const data = { id: contactId, name: valueName, number: valueNumber };

        this.state.contacts.map(contact => {
            if (contact.name === valueName && contact.number === valueNumber) {
                alert(`${valueName} is already in contacts!`)
            }
        });

        this.setState(prevState =>
            ({ contacts: [data, ...prevState.contacts] }));
    };

    deleteContact = idContact => {
        this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== idContact)}))
    };

    render() {
        return (
            <div className="Container">
                <h2>Phonebook</h2>
                <ContactForm props={this}/>
                <h2>Contacts</h2>
                <Filter onSearchInput={this.onSearchInput } />
                <ContactList contacts={this.state.contacts} onDeleteContact={this.deleteContact}  />
                </div>
        )
    };
};

export default Form;