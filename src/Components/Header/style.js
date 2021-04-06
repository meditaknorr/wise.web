import styled from 'styled-components';
export { Header, Logotipo, Links };

const Header = styled.header`
  background-color: white;
  width: 100%;
  height: ${(50/16)}rem;
  border-bottom: ${(1/16)}rem solid rgba(0, 0, 0, 0.05);
  display: flex;
  padding: 0 ${(20/16)}rem;
  justify-content: space-between;
  align-items: center;
`;

const Logotipo = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid red;
`;

const Links = styled.ul`
  width: 400px;
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid red;
  float: left;
`;
