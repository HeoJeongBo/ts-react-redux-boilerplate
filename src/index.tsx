import ReactDom from "react-dom";
import App from "./components/App";

const Root = () => {
    return <App />;
};

ReactDom.render(<App />, document.querySelector("#root"));
