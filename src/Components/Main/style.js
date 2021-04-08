import styled from 'styled-components';
export { Main };

const Main = styled.main`
  background-color: white;
  width: 100%;
  min-height: ${(45/16)}rem;
  //border-bottom: ${(1/16)}rem solid rgba(0, 0, 0, 0.05);
  display: flex;
  padding: 0 ${(20/16)}rem;
  //justify-content: center;
  align-items: center;
  position: relative;
`;
