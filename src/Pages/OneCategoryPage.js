import { Link, useParams } from "react-router-dom"
import categoriesListByIndex from "../Docs/categoriesListByIndex"

function OneCategoryPage() {
    const {index} = useParams()
    const category = categoriesListByIndex(index)

    
    

    return (
        <div key={index} className="mb-5">
            <h6 className="mb-4 breadcrumb">
                <Link style={{ textDecoration: 'none'}} to="/">
                    <span className="text-muted">Home &#187; </span>
                </Link>
                <Link style={{ textDecoration: 'none'}} to="/categories">
                    <span className="breadcrumb">What I am creating &#187; </span>
                </Link>
                <span className="header-menu">{category.title}</span></h6>
            <h1 className="header-menu">{category.title}</h1>
            <p className="card-text">{category.description}</p>
            
            <div className="row row-cols-3 mb-3 mt-3">
            {category.products.map
                ( product => 
                    <div>
                        {
                            <div key={index} className="card">
                                <img src={product.picture} className="card-img-top"/>
                                        
                                    <div className="card-body">
                                        <h6 className="card-title">{product.title}</h6>
                                        <p>{product.price}</p>
                                        <button className="btn cart">Add to cart</button>
                                    </div>
                            </div>
                        }
                    </div>
                )
            }
            </div>
            
            
        </div>
    )
}

export default OneCategoryPage