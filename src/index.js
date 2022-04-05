import * as ReactDOMClient from "react-dom/client"
//import ReactDOM from "react-dom"; DEPRECATED
import Museums from "./components/museums/museums";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(<Museums/>)

//ReactDOM.render(<Museums/>, document.getElementById("root")); DEPRECATED