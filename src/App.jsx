import { Suspense, lazy } from "react";
import "./css/App.css";
import { Routes, Route } from "react-router";
import { useLocation } from "react-router";

import Spinner from "./components/Spinner";

// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import Projects from "./pages/Projects";
// import ProjectDetail from "./pages/ProjectDetail";
// import Header from "./components/Header";

// Code splitting
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Header = lazy(() => import("./components/Header"));

function App() {
    const location = useLocation();
    // Add the path that you want exclude header
    const hideHeaderPaths = ["/login", "/signup"];
    const showHeader = !hideHeaderPaths.includes(location.pathname);

    return (
        <div className="App">
            <Suspense
                fallback={
                    <div className="loading-page">
                        <Spinner />
                    </div>
                }
            >
                {showHeader && <Header />}
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/projects" element={<Projects />}></Route>
                    <Route
                        path="/projects/:id"
                        element={<ProjectDetail />}
                    ></Route>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
