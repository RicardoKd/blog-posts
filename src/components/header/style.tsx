import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 1000px;
  min-width: 360px px;
  margin-bottom: 5px;

  & > * {
    margin: 0 30px;
    color: white;
  }
`;

export default StyledHeader;
