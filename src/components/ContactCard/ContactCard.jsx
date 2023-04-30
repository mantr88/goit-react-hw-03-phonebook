import PropTypes from 'prop-types';
import { Card } from "./ContactCard.styled";

export const ContactCard = ({ contact:{name, number, id }, onDelete}) => {
    return (
        <Card>
            <p>{name}</p> :
            <p>{number}</p>
            <button type="button" onClick={()=>onDelete(id)}>Delete</button>
        </Card>
    );
};

ContactCard.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }),
    onDelete: PropTypes.func.isRequired
};