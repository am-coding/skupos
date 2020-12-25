import { FC } from 'react';
import styled from 'styled-components';

interface ButtonProps {
    title: string,
    bgColor: string,
    txtColor: string,
    border?: string,
}

const StyledButton = styled.button`
    padding: 12px 20px;
    border-radius: 200px;
    :hover {
        cursor: pointer;
    }
`;

const Button: FC<ButtonProps> = ({
    title,
    bgColor,
    txtColor,
    border
}) => {

    return (
        <StyledButton style={{backgroundColor: bgColor, color: txtColor, border: border}}>
            {title}
        </StyledButton>
    )
}

export default Button;