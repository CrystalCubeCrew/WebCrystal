import * as React from "react";
import * as ReactDOM from "react-dom";
import { db } from './lib/firebase';

import { WebCrystal } from "./comp/WebCrystal";

ReactDOM.render(
  <WebCrystal db={db} />,
  document.getElementById("app")
);