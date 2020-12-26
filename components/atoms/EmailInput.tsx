import { FC } from 'react';
import styled from 'styled-components';

const StyledEmailInput = styled.div`
   
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    border-bottom: 1px solid rgb(10,37,51, 0.2);
    padding: 4px;
    input {
        border: none;
    }
    img {
        width: 0.5em;
        height: 0.5em;
    }
`;

const EmailInput: FC = () => {
    return (
        <StyledEmailInput>
            <input placeholder="Enter your email address" />
            <img src="/Vector.png" />
        </StyledEmailInput>
    )
}

export default EmailInput;
