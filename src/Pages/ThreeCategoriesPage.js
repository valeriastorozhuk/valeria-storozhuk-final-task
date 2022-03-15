import { Link } from "react-router-dom"
import categoriesList from "../Docs/categoriesList"

function ThreeCategoriesPage() {
    const categories = categoriesList()
    const categoryList = categories.map((category, index) => {
        return (
            <div key={index} className="card mb-3 border-bottom pb-4">

                <div className="row g-0">

                    <div className="col-md-2">
                        <img src={category.picture} className="img-fluid rounded-start catimg"/>
                    </div>

                <div className="col-md-10">
                    <div className="card-body">
                        <h5 className="card-title header-menu">{category.title}</h5>
                        <p className="card-text">{category.description}</p>
                        <Link to={`/categories/${index}`}><button className="btn cart">See more</button></Link>
                    </div>
                </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <h6 className="mb-4 breadcrumb"><Link style={{ textDecoration: 'none'}} to="/"><span className="text-muted">Home &#187; </span></Link>What I am creating</h6>
            {categoryList}
        </div>
    )
}

export default ThreeCategoriesPage