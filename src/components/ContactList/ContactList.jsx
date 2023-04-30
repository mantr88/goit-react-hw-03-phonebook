import { ContactCard } from "components/ContactCard/ContactCard";
import PropTypes from 'prop-types';
import { List } from "./ContactList.styled";

export const ContactList = ({contacts, onDelete}) => {
    return (
            <List>
            {contacts.map(contact => (
                    <ContactCard key={contact.id} contact={contact} onDelete={onDelete} />
                ))}
            </List>
        )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })),
    onDelete: PropTypes.func.isRequired
};