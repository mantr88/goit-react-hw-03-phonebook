import PropTypes from 'prop-types';
import { FilterLable } from "./Filter.styled";

export const Filter = ({ value, onChange }) => {
    return (
        <FilterLable>
            Find contacts by name
            <input type='text' value={value} onChange={onChange}></input>
        </FilterLable>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};