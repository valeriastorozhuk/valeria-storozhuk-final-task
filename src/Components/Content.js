import { Route, Routes } from "react-router-dom"
import HomePage from "../Pages/HomePage";
import ThreeCategoriesPage from "../Pages/ThreeCategoriesPage";
import OneCategoryPage from "../Pages/OneCategoryPage";
import RegisterPage from "../Pages/RegisterPage";
import ChatPage from "../Pages/ChatPage";
import ContactsPage from "../Pages/ContactsPage";


function Content() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/categories" element={<ThreeCategoriesPage />}/>
                <Route path="/categories/:index" element={<OneCategoryPage />} />
                <Route path="/register" element={<RegisterPage />}/>
                <Route path="/chat" element={<ChatPage />}/>
                <Route path="/contacts" element={<ContactsPage />}/>
            </Routes>
        </div>
    )
}

export default Content