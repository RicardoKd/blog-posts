import styled from 'styled-components';

const StyledComment = styled.div`
  position: relative;
  padding: 3px 10px;
  margin-bottom: 20px;

  &::before {
    content: '';
    width: 120px;
    height: 2px;
    background-color: black;
    position: absolute;
    top: -1px;
  }
`;

export default StyledComment;
