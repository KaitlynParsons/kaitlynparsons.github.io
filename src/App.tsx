import { Route, Routes } from "react-router-dom";
import Navigation from "./components/layouts/Navigation/Navigation";
// import Blog from "./components/pages/Blog/Blog";
import ReactGA from "react-ga4";
import About from "./components/pages/About/About";
import { useEffect } from "react";

const App = () => {
    const isProd = import.meta.env.PROD;
    
    useEffect(() => {
        if (isProd) {
            ReactGA.initialize("G-SXHJ261CZ0");
        }
    });

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