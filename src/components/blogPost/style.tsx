import styled from 'styled-components';

// 40px are padding from <main>
export const Post = styled.div`
  min-width: calc(100% - 40px);
  max-width: 750px;
  background-color: #bdc3c7;
  border-radius: 20px;
  padding: 30px 20px;
  margin: 10px 0;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
