import styled from 'styled-components';

const StyledDiv = styled.div`
  /* margin: 0 4%;
  @media (min-width: 64em) {
  .container {
    margin: 0 8%;
  }
  }
  @media (min-width: 85.375em) {
    .container {
      margin: 0 12%;
    }
  }
  @media (min-width: 120em) {
    .container {
      margin: 0 18%;
    }
  } */
`;

import ResourcesHero from '../components/organisms/ResourcesHero';
export default function Home() {
  return (
    <StyledDiv>
      <ResourcesHero />
    </StyledDiv>
  )
}
