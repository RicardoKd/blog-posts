import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 0 5px;
  padding: 4px 10px;
  font-size: 14px;
  font-weight: 600;
  color: #53488d;
  background-color: #fcd9d9;
  border: none;
  border-radius: 20px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #ffbbbb;
  }
`;

export default StyledButton;
