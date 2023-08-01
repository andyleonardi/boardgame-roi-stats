import { Link } from "react-router-dom";

const FormDone = () => {
    return ( 
        <div>
            <h2>Thank you! Click to return to your collections</h2>
            <div>
                <Link to="/collections">Back to Collections</Link>
            </div>
        </div>
     );
}
 
export default FormDone;