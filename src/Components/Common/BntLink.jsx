import { Link } from "react-router-dom";

export default function BntLink({to,className, TextBnt}){
    return(
        <Link to={to}><button className={className}>{TextBnt}</button></Link>
    )
}