import React from "react";

import Aux from "../../hoc/Auxiliary";
import classes from "./Layout.css";

const layout = props => (
  <Aux className={classes.Content}>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;