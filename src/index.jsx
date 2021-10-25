import { h, render } from "preact";
//  import {html} from "htm/preact"
import App from "./App";
import Practice from "./components/Practice";
import Navigo from "navigo";
import Navbar from "./components/navbar";

const router = new Navigo("/")

render(
  <div>
    <Navbar />
     <App /> 
    {/* <Practice /> */} 
  </div>,
  document.getElementById("root")
);
render(
  <div>
   <h1>Hello from Second</h1>
  </div>,
document.getElementById("secondRoot")
)

router
.on("", () =>{
document.getElementById("root").style.display = "";
document.getElementById("secondRoot").style.display="none";

})
.resolve()
router
.on("/trash", ()=>{
  document.getElementById("root").style.display = "none";
  document.getElementById("secondRoot").style.display = "";
})
.resolve()

// const Router = {
//   router: null,
//   getRouter(){
//     if(!this.router){
//       const rootUrl = ${window.location.protocol}
//       this.router = new Navigo(, false)
//     }
//   }
// }






// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (undefined /* [snowpack] import.meta.hot */) {
  undefined /* [snowpack] import.meta.hot */
    .accept();
}
