import styled from 'styled-components';
export { Header, Logotipo, Links };

const Header = styled.header`
  width: 100%;
  height: ${(50/16)}rem;
  border-bottom: ${(1/16)}rem solid rgba(0, 0, 0, 0.05);
  display: flex;
  padding: 0 ${(20/16)}rem;
  justify-content: space-between;
  align-items: center;
`;

const Logotipo = styled.div`
  width: ${(200/16)}rem;
  height: ${(40/16)}rem;
  display: flex;
  align-items: center;


  img {
    width: ${(100/16)}rem;
    opacity: 0.8;
    margin: 0 ${(10/16)}rem 0 0;
  }

  p {
    width: ${(30/16)}rem;
    font-size: ${(10/16)}rem;
    font-weight: bold;
    line-height: 1.1;
    margin: ${(-1/16)}rem 0 0 0;
    text-transform: uppercase;
  }
`;

const Links = styled.ul`
  width: ${(420/16)}rem;
  height: ${(40/16)}rem;
  display: flex;
  float: left;
  align-items: center;
  list-style: none;

  li {
    text-transform: capitelize;
    margin: 0 0 0 ${(8/16)}rem;
    padding: 5px 7px;
    font-size:
    transform: all ease-in-out 1s;
    font-weight: 600;
    color: rgba(51, 51, 51, 0.95);
    border-bottom: 2px solid rgba(0, 0, 0, 0);

    a {
      text-decoration: none;
      color: inherit;
    }

    &:hover {
      transition: color ease-in-out 0.5s;
      -moz-transition: color ease-in-out 0.5s;
      -webkit-transition: color ease-in-out 0.5s;
      border-bottom: 2px solid rgba(0, 0, 0, 0);
      color: rgba(95, 212, 61, 1.0);
      font-weight: 600;
      cursor: pointer;
      opacity: 1.0;
    }
  }
`;
