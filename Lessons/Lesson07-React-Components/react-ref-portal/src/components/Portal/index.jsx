import ReactDOM from "react-dom";
const Portal = ({ target, text }) => {
    return ReactDOM.createPortal(
    <div>Hello World i am Portal, my TARGET is {text}</div>,
    target
);
};

export default Portal;
