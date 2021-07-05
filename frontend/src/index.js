import {render} from "react-dom";
import React from "react";
import {ComponentTemplate} from "./components/Template";
import './i18n'

const container = document.getElementById("app");
render(<ComponentTemplate />, container);
