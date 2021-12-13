import React from "react";
import Container from "react-bootstrap/Container";
import "./Footer.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Footer() {
  return (
    <footer className="footer px-0 px-lg-3">
      <Container fluid>
        <nav>
          <p className="copyright text-center">
            © {new Date().getFullYear()}{" "}
            <a href="https://github.com/J-JohnWills">Jamie Williams</a>, made
            with <FavoriteIcon fontSize="small" />
          </p>
        </nav>
      </Container>
    </footer>
  );
}
