import { Link } from "react-router-dom"
import categoriesList from "../Docs/categoriesList"

function HomeCard() {
    const categories = categoriesList()
    const categoryList = categories
        .slice(0, 3)
        .map((category, index) => {
            const shortDesc = category.description.split(" ").slice(0, 28).join(" ")
        return (
            <div key={index} className="card col-4">
                <img src={category.picture} className="card-img-top catimg"/>

                <div className="card-body">
                    <h5 className="card-title header-menu">{category.title}</h5>
                    <p className="card-text">{shortDesc}</p>
                    <Link to={`/categories/${index}`}><button className="btn cart">See more</button></Link>
                </div>
            </div>
        )
    })
    return (
        <div className="row mb-3 mt-3 card-group">
            {categoryList}
        </div>
    )
}

export default HomeCard