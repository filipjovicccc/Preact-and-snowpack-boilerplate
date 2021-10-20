import { h, render } from "preact";
//  import {html} from "htm/preact"
import App from "./App";
import Practice from "./components/Practice";

render(
  <div>
    <App />
    <Practice />
  </div>,
  document.getElementById("root")
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (undefined /* [snowpack] import.meta.hot */) {
  undefined /* [snowpack] import.meta.hot */
    .accept();
}
