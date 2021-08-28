import { Child, ChildAsFc } from "./Child";

const Parent = () => {
    // return <Child color="red" onClick={() => console.log("Clicked")}>
    //     asdasd
    // </Child>;
    return (
        <ChildAsFc color="red" onClick={() => console.log("CLicked")}>
            asdasd
        </ChildAsFc>
    );
};

export default Parent;
