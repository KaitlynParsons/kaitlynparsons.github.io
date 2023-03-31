import { Route, Routes } from "react-router-dom";
import Navigation from "./components/layouts/Navigation/Navigation";
import Blog from "./components/pages/Blog/Blog";
import About from "./components/pages/About/About";

const App = () => {
    return (
        <Routes>
            <Route element={<Navigation />}>
                <Route index element={<About />} />
                <Route path="about" element={<About />} />
                {/* <Route path="blog" element={<Blog />} /> */}
            </Route>
        </Routes>
    )
}

export default App;