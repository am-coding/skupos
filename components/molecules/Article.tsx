import { FC } from 'react';
import styled from 'styled-components';

interface articleProps {
    tag: string,
    title: string,
}

const StyledDiv = styled.div`
    margin-bottom: 0.7em;
    img {
        width: 0.4em;
        height: 0.5em;
        margin-right: 0.3em;
    }
    h1 {
        font-size: 0.8em;
        max-width: 24em;
        margin: 0;
        margin-right: 8em;
        line-height: 1.2em;
    }
    .tag {
        display: flex;
        align-items: center;
        margin-bottom: 0.5em;
    }
    span {
        text-transform: uppercase;
        font-size: 0.5em;
        font-weight: bold;
    }
    @media only screen and (max-width: 37.5em) {
        h1 {
        max-width: 100%;
        margin-right: 2em;
    }
    }
`;

const Article: FC <articleProps> = ({tag, title}) => {
    return (
        <StyledDiv>
            <div className="tag">
                <img src="/icon-2.png" />
                <span>{tag}</span>
            </div>
            <h1>{title}</h1>
        </StyledDiv>
    )
}

export default Article;
