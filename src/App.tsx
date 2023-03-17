import { Route, Routes } from "react-router-dom";
import Navigation from "./components/layouts/Navigation/Navigation";
import Blog from "./components/pages/Blog/Blog";
import Home from "./components/pages/Home/Home";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="blog" element={<Blog />} />
            </Route>
        </Routes>
    )
}

export default App;