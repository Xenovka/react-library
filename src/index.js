import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faShoppingCart,
  faTimes,
  faBolt,
  faBookOpen,
  faTags,
  faStar,
  faStarHalfAlt,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faArrowLeft);

const app = createRoot(document.getElementById("root"));
app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
