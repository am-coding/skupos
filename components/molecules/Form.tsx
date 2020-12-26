import { FC } from 'react';
import styled from 'styled-components';
import EmailInput from '../atoms/EmailInput';

const StyledForm = styled.div`
    background-color: #ffffff;
    padding: 1.2em;
    max-width: 18em;
    h2 {
        font-size: 0.8em;
        margin: 0;
    }
    @media only screen and (max-width: 37.5em) {
        max-width: 100%;
    }
`;

const Form: FC = () => {
    return (
        <StyledForm>
            <h2>Get the latest from Skupos</h2>
            <EmailInput />
        </StyledForm>
    )
}

export default Form;
