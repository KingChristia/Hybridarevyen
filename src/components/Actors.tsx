import React from "react";
//import AppBar from "../components/AppBar";
import { History } from "history";
import { Grid, Card } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
// import elise from "../bilderr/nyebilder/elise.jpg";
import sverre from "../bilderr/nyebilder/sverre.jpg";
import mo from "../bilderr/nyebilder/MO.jpg";
import helene from "../bilderr/nyebilder/helene.jpg";
import oscar from "../bilderr/nyebilder/timm.jpg";
import steph from "../bilderr/nyebilder/steph.jpg";
import kris from "../bilderr/nyebilder/kris.jpg";
import even from "../bilderr/nyebilder/even.jpg";
import logo from "../bilderr/logo.png";
import elise from "../bilderr/nyebilder/elise.jpg";

const actors = [
  {
    Name: "Elise Raaen Bø",
    pic: elise,
  },
  {
    Name: "Sverre Kjuus",
    pic: sverre,
  },
  {
    Name: "Mads Olav Eek",
    pic: mo,
  },
  {
    Name: "Helene Maria Tellefsen",
    pic: helene,
  },
  {
    Name: "Oscar Timm Marcussen",
    pic: oscar,
  },
  {
    Name: "Stephanie Huynh",
    pic: steph,
  },
  // {
  //   Name: "Kristoffer Seyffarth",
  //   pic: kris,
  // },
  // {
  //   Name: "Even Eielsen",
  //   pic: even,
  // },
];

const Actors: React.FC<any> = ({ history }) => {
  return (
    <div>
      <div>
        <h1 className="h1-actors">Skuespillerne</h1>
      </div>
      <div className="">
        <Grid container spacing={5} className="actors-container grid-remove">
          {actors.map((actor) => (
            <>
              <Grid
                className="actors-name grid-remove"
                item
                xs={12}
                sm={4}
                md={4}
                key={actor.Name}
              >
                <div className="actors-name">
                  <img className="actors-pic" src={actor.pic} />
                  <h2 className="actors-name">{actor.Name}</h2>
                </div>
              </Grid>
            </>
          ))}
          <Grid className="grid-remove" item xs={12} sm={6} md={6}>
            <img className="actors-kris2" src={kris} />
            <h2 className="actors-kris2">Kristoffer Seyffarth </h2>
          </Grid>
          {/* <Grid item xs={12} sm={4} md={4}>
            <img className="actors-logogrid-remove " src={logo} />
          </Grid> */}
          <Grid item xs={12} sm={4} md={4} className="grid-remove">
            <img className="actors-kris" src={even} />
            <h2 className="actors-kris">Even Eilesen</h2>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Actors;
