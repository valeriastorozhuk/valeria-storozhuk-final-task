import { Link } from "react-router-dom"
import socialMedia from "../Docs/footerSocialMedia"
import logo from "../Pictures/VSLogo-no-background-curves.png"

function Footer() {
    const socMediaIcons = socialMedia()
    const iconsList = socMediaIcons.map((icon, index) => {
        return <a key={index} href={icon.link} target="_blank" rel="noreferrer" className="navbar-brand"><img src={icon.img} className="img-responsive" alt={icon.alt} style={{width:"10%"}}/></a>
    })

    return (
        <div className="row footer align-items-center justify-content-center">
            <div className="col mt-3">
                <h6 className="footer-header mb-3 text-end">Menu:</h6>
                    <ul className="text-end">
                        <Link style={{ textDecoration: 'none'}} to="/"><li className="copyright">Home</li></Link>
                        <Link style={{ textDecoration: 'none'}} to="/categories"><li className="copyright">What I am creating</li></Link>
                        <Link style={{ textDecoration: 'none'}} to="/chat"><li className="copyright">Chat</li></Link>
                        <Link style={{ textDecoration: 'none'}} to="/contacts"><li className="copyright">Contacts</li></Link>
                    </ul>
            </div>

            <div className="col text-center mt-3">
                <h6 className="footer-header mb-3">Let's connect:</h6>
                {iconsList}
                <p className="mt-3 copyright">© VSHandmade 2016 - 2022. All rights reserved.</p>
            </div>

            <div className="col mt-3">
                <Link to="/"><img src={logo} style={{width:"27%"}} alt="VS Logo"/></Link>
            </div>
        </div>
    )
}

export default Footer