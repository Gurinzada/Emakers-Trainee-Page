import { Link } from "react-router-dom";

export default function A ({path, textFor}){
    return(
        <Link to={path}>{textFor}</Link>
    )
}