import girlGifts from "../Pictures/slider-girls.png"
import boyGifts from "../Pictures/slider-boys.png"
import patrickDay from "../Pictures/slider-patrick.png"
import cite from "../Pictures/slider-handmade.png"

function HomeCarousel() {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={girlGifts} className="d-block w-100" alt="Gifts for girls"/>
                </div>
                <div className="carousel-item">
                    <img src={boyGifts} className="d-block w-100" alt="Gifts for boys"/>
                </div>
                <div className="carousel-item">
                    <img src={patrickDay} className="d-block w-100" alt="Upcoming events"/>
                </div>
                <div className="carousel-item">
                    <img src={cite} className="d-block w-100" alt="Worth it"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default HomeCarousel