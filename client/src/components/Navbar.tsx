import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/urls">My Urls</Link>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 8fr 1fr 1fr;
  height: 10vh;
  justify-items: end;
  align-items: center;
  & a {
    text-decoration: none;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    :hover {
      transform: scale(1.1);
    }
  }
`;
