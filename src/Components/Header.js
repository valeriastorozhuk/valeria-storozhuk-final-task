import { Link } from "react-router-dom"
import logo from "../Pictures/VSLogo.png"

function Header() {
    return (
        <div className="header">

            <div className="row p-4">

                <div className="col">
                    <Link to="/"><img src={logo} style={{width:"15%"}} className="img-fluid" alt="VS Logo"/></Link>
                </div>

                <div className="col text-end">

                    <div className="row d-flex flex-row-reverse">
                        
                        <form className="col col-12 col-lg-auto mb-3 mb-lg-0 me-lg-">
                            <input type="search" className="form-control mb-2 cart" placeholder="Search..." aria-label="Search"/>
                        </form>

                        <div className="col">
                            <button type="button" className="btn cart"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg></button>
                        </div>

                        
                        
                    </div>

                    <div className="row">
                        <div className="col">
                            <Link style={{ textDecoration: 'none'}} to="/register"><p className="copyright">Register | Login</p></Link>
                        </div>
                    </div>

                    <div className="row align-text-bottom">
                        <div className="col-9">
                            <Link style={{ textDecoration: 'none'}} to="/categories"><p className="footer-header">What I am creating</p></Link>
                        </div>
                        <div className="col">
                            <Link style={{ textDecoration: 'none'}} to="/chat"><p className="footer-header">Chat</p></Link>
                        </div>
                        <div className="col">
                            <Link style={{ textDecoration: 'none'}} to="/contacts"><p className="footer-header">Contacts</p></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header