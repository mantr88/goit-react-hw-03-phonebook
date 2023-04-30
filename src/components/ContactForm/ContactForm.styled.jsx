import styled from "styled-components";
import { Form as FormikForm, ErrorMessage as FormikErrorMessage, Field as FormikField } from 'formik';

export const Form = styled(FormikForm)`
    padding: 16px;
    margin-bottom: 25px;
    text-align: start;
    border: 2px solid ${p => p.theme.colors.main};
    border-radius: 10px;

    button {
        padding: 10px;
        background-color: ${p => p.theme.colors.extraLight};
        border: none;
        border-radius: 10px;
        
        :hover, :focus {
            color: ${p => p.theme.colors.text};
            background-color: ${p => p.theme.colors.midle};
        }
    }
`;

export const FormField = styled.label`
    display: flex;
    flex-direction: column;
`;

export const Field = styled(FormikField)`
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: ${p=>p.theme.colors.extraLight};
`;

export const ErrorMessage = styled(FormikErrorMessage)`
    margin-bottom: 10px;
    color: ${p=>p.theme.colors.error};
`;