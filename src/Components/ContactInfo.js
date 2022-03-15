function ContactInfo() {
    return (
        <div className="card-body">
            <h6 className="card-title"><b>Address:</b></h6>
            <p className="card-text">Institūta iela, Ulbroka</p>
            <h6 className="card-title"><b>Email:</b></h6>
            <p className="card-text"><a href = "mailto:valeria.storozhuk@gmail.com" className="copyright">valeria.storozhuk@gmail.com</a></p>
            <h6 className="card-title"><b>Phone:</b></h6>
            <p className="card-text"><a href="tel:+371 2555 44 22" className="copyright">+371 2555 44 22</a></p>      
        </div>
    )
}
export default ContactInfo