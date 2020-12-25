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
        height: 0.4em;
        margin-right: 0.5em;
    }
    h1 {
        font-size: 0.8em;
        max-width: 24em;
        margin: 0;
        margin-right: 8em;
    }
    .tag {
        display: flex;
        align-items: center;
    }
    span {
        text-transform: uppercase;
        font-size: 0.5em;
        font-weight: bold;
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
