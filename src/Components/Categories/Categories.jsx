import React from "react";
import Action from "./Action/Action";
import Adventure from "./Adventure/Adventure";
import Comedy from "./Comedy/Comedy";
import Fantasy from "./Fantasy/Fantasy";
import Horror from "./Horror/Horror";
import Sci_Fi from "./Sci_Fi/Sci_Fi";
import Romance from "./Romance/Romance";

function Categories() {
  return (
    <div>
      <Action />
      <Adventure />
      <Comedy />
      <Fantasy />
      <Horror />
      <Sci_Fi />
      <Romance />
    </div>
  );
}

export default Categories;
