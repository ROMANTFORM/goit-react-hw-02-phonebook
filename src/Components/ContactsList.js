import React from "react";
import "./Form.css";



const ContactList = ({contacts, onDeleteContact }) => {
    
    return (
        <div className="Contact-container">
                <ul className="Contact-container__list">
                {contacts.map(contact => (
                    <li key={contact.id} className="Contact-container__item">{contact.name}: {contact.number}
                        <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
                    </li>
                ))}
                </ul>
            </div>
    )
};

export default ContactList;