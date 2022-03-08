import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Button } from "@mui/material";
import { FaAlignLeft, FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { inherits } from "util";
import { useHistory } from "react-router-dom";
import logo from "../bilderr/logo.png";
import { BrowserView, MobileView } from "react-device-detect";
import Hamburger from "hamburger-react";
import { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

export default function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  let history = useHistory();

  return (
    <>
      <BrowserView>
        <Box
          sx={{
            width: "100%",
            flexGrow: 1,
            position: "sticky",
            top: 0,
            zIndex: 9999,
          }}
        >
          <AppBar position="static" style={{ background: "#01529d" }}>
            <Toolbar variant="regular" sx={{ width: "auto" }}>
              <Box sx={{ width: "100%", height: "auto" }}>
                <Button
                  variant="text"
                  style={{
                    color: "white",
                    transition: "0.2s",
                  }}
                  onClick={(e) => history.push("/program")}
                >
                  Program
                </Button>
                <Button
                  variant="text"
                  style={{
                    color: "white",
                  }}
                  onClick={(e) => history.push("/Bilder")}
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
                  }}
                  onClick={(e) => history.push("/styret")}
                >
                  Hvem er vi?
                </Button>
                <a href="https://tikkio.com/tickets/28027-hybridarevyen-2022-bare-revy?fbclid=IwAR1310KnEqsoF-gYpNwWKt89DreCbEREfmDUZ1WORYWE1xgp-idOaDSbU-I">
                  <Button
                    variant="text"
                    style={{
                      color: "white",
                      transition: "0.2s",
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
                    style={{
                      float: "right",
                      padding: "10px",
                      transition: "0.2s",
                    }}
                  />
                </a>
                <a
                  className="linkFaceInsta"
                  href="https://instagram.com/hybridarevyen?utm_medium=copy_link"
                >
                  <FaInstagram
                    style={{
                      float: "right",
                      padding: "10px",
                      transition: "0.2s",
                    }}
                  />
                </a>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </BrowserView>
      <MobileView>
        <Box>
          <AppBar variant="outlined" position="static">
            <Toolbar className="navbar-mobile">
              <IconButton
                className="hamburger"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setIsDrawerOpen(true)}
              >
                <Hamburger />
              </IconButton>
              <Link href="/" color="inherit">
                <img className="navbar-logo" src={logo} />
              </Link>
              <Drawer
                className="hamburger"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
              >
                <List>
                  <ListItem button>
                    <ListItemText
                      primary="Program"
                      onClick={(e) => history.push("/program")}
                    />
                  </ListItem>
                  <ListItem button>
                    <ListItemText
                      primary="Bilder"
                      onClick={(e) => history.push("/Bilder")}
                    />
                  </ListItem>
                  <ListItem button>
                    <ListItemText
                      primary="Hvem er vi?"
                      onClick={(e) => history.push("/Styret")}
                    />
                  </ListItem>
                  <ListItem button>
                    <a href="https://tikkio.com/tickets/28027-hybridarevyen-2022-bare-revy?fbclid=IwAR1310KnEqsoF-gYpNwWKt89DreCbEREfmDUZ1WORYWE1xgp-idOaDSbU-I">
                      <ListItemText primary="Kjøp billett" />
                    </a>
                  </ListItem>
                </List>
              </Drawer>
            </Toolbar>
          </AppBar>
        </Box>
      </MobileView>
    </>
  );
}
