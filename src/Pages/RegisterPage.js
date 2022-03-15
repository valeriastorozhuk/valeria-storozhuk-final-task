import { Link } from "react-router-dom"
import Form from "../Components/Form"

function RegisterPage() {
    return (
        <div className="mb-5">
            <h6 className="mb-4 breadcrumb"><Link style={{ textDecoration: 'none'}} to="/"><span className="text-muted">Home &#187; </span></Link>Registration</h6>
            <Form />
        </div>
    )
}

export default RegisterPage