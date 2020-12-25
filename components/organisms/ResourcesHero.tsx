import { FC } from 'react';
import styled from 'styled-components';
import Navbar from '../molecules/Navbar';

const StyledResourcesHero = styled.div`
    
`;

const items = ['Products', 'Resources', 'Support'];


const ResourcesHero: FC = () => {
    return (
        <StyledResourcesHero>
            <Navbar 
                items={items}
             />
        </StyledResourcesHero>
    )
} 

export default ResourcesHero;
