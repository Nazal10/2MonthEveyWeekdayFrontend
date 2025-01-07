import { useParams } from "react-router-dom";
const ParameterView = () => {
    const {id } = useParams();
    return <div>useParams Page! {id}</div>;

};

export default ParameterView;