import categoriesList from "./categoriesList";

function categoriesListByIndex(index) {
    const categories = categoriesList()
    return categories[index]
}

export default categoriesListByIndex