import ReactDom from "react-dom";
import EventComponent from "./events/EventComponent";
import Parent from "./props/Parent";
import UserSearch from "./refs/UserSearch";
import GuestList from "./state/GuestList";
// import UserSearch from "./state/UserSearch";

const App = () => {
    return (
        <div>
            {/* <GuestList /> */}
            {/* <UserSearch /> */}
            {/* <EventComponent /> */}
            <UserSearch />
        </div>
    );
};

ReactDom.render(<App />, document.querySelector("#root"));
