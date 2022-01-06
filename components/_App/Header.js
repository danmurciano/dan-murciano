import Link from "next/link";
import Router, { useRouter } from "next/router";
import { Navbar, Nav } from "react-bootstrap";


export default function Header() {
  const router = useRouter();

  return (
    <>
      <Navbar sticky="top" variant="dark" className="navbar-center">
        <Nav className="nav-center">

          <Nav.Link
            className={router.pathname === "/" ? "nav-item navTextActive" : "nav-item navText"}
            href="/#home">Home
          </Nav.Link>

          <Nav.Link
            className={router.pathname === "/about" ? "nav-item navTextActive" : "nav-item navText"}
            href="/#about">About
          </Nav.Link>

          <Nav.Link
            className={router.pathname === "/projects" ? "nav-item navTextActive" : "nav-item navText"}
            href="/#projects">Projects
          </Nav.Link>

          <Nav.Link
            className={router.pathname === "/contact" ? "nav-item navTextActive" : "nav-item navText"}
            href="/#contact">Contact
          </Nav.Link>

        </Nav>
      </Navbar>
    </>

  );
}
