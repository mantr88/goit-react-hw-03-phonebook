import styled from "styled-components";

export const FilterLable = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    padding: 0 16px;
    text-align: start;

    input {
        margin-top: 10px;
        padding: 10px;
        border: none;
        border-radius: 10px;
        background-color: ${p=>p.theme.colors.extraLight};
    }
`;