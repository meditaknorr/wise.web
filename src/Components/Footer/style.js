import styled from 'styled-components';
export { Footer, Desenvolvedor, Links };

const Footer = styled.footer`
  background-color: white;
  width: 100%;
  position: absolute;
  bottom: 0;
  height: ${(45/16)}rem;
  border-top: ${(1/16)}rem solid rgba(0, 0, 0, 0.05);
  display: flex;
  padding: 0 ${(20/16)}rem;
  justify-content: space-between;
  align-items: center;
`;

const Desenvolvedor = styled.div`
  width: 200px;
  height: 30px;
  display: flex;
  align-items: center;
  border: 1px solid red;
`;

const Links = styled.ul`
  width: 400px;
  height: 30px;
  display: flex;
  align-items: center;
  border: 1px solid red;
  float: left;
`;
