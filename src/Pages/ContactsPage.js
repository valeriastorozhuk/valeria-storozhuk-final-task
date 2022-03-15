import { Link } from "react-router-dom"
import ApiMap from "../Components/ApiMap"
import ContactTabs from "../Components/ContactTabs"
import ContactInfo from "../Components/ContactInfo"

function ContactsPage() {
    return (
        <div>
            <h6 className="mb-4 breadcrumb"><Link style={{ textDecoration: 'none'}} to="/"><span className="text-muted">Home &#187; </span></Link>Contacts</h6>
            <ContactTabs />
            <div className="row mb-5">
                <div className="col">
                    <ApiMap />
                </div>
                <div className="col">
                    <ContactInfo />
                </div>
            </div>
        </div>
    )
}

export default ContactsPage