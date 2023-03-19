import { Route, Routes } from "react-router-dom";
import Navigation from "./components/layouts/Navigation/Navigation";
import Blog from "./components/pages/Blog/Blog";
import About from "./components/pages/About/About";
import Projects from "./components/pages/Projects/Projects";

const App = () => {
    return (
        <Routes>
            <Route element={<Navigation />}>
                <Route index element={<About />} />
                <Route path="blog" element={<Blog />} />
                <Route path="projects" element={<Projects />} />
            </Route>
        </Routes>
    )
}

export default App;