import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Button } from "@mui/material";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { inherits } from "util";
import { useHistory } from "react-router-dom";
import logo from "../bilderr/logo.png";

export default function NavBar() {
  let history = useHistory();

  return (
    <Box sx={{ flexGrow: 1, position: "sticky", top: 0, zIndex: 9999 }}>
      <AppBar position="static" style={{ background: "#01529d" }}>
        <Toolbar variant="regular">
          <Button
            variant="text"
            style={{
              color: "white",
              margin: "auto",
              marginTop: "20px",
              transition: "0.2s"
            }}
            onClick={e => history.push("/program")}
          >
            Program
          </Button>
          <Button
            variant="text"
            style={{
              color: "white",
              margin: "auto",
              marginTop: "20px",
              transition: "0.2s"
            }}
            onClick={e => history.push("/Images")}
          >
            Bilder
          </Button>

          <Link href="/" color="inherit">
            <img className="navbar-logo" src={logo} />
          </Link>
          <Button
            variant="text"
            style={{
              color: "white",
              margin: "auto",
              marginTop: "20px",
              transition: "0.2s"
            }}
          >
            Hvem er vi?
          </Button>
          <a href="https://tikkio.com/tickets/28027-hybridarevyen-2022-bare-revy?fbclid=IwAR1310KnEqsoF-gYpNwWKt89DreCbEREfmDUZ1WORYWE1xgp-idOaDSbU-I">
            <Button
              variant="text"
              style={{
                color: "white",
                margin: "auto",
                marginTop: "20px",
                transition: "0.2s"
              }}
            >
              Kjøp Billett
            </Button>
          </a>
          <a
            className="linkFaceInsta"
            href="https://www.facebook.com/hybridarevyen"
          >
            <FaFacebook
              style={{ float: "right", padding: "10px", transition: "0.2s" }}
            />
          </a>
          <a
            className="linkFaceInsta"
            href="https://instagram.com/hybridarevyen?utm_medium=copy_link"
          >
            <FaInstagram
              style={{ float: "right", padding: "10px", transition: "0.2s" }}
            />
          </a>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
