import { useState } from "react";
import "./css/App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/projects/:id" element={<ProjectDetail />}></Route>
            </Routes>
        </div>
    );
}

export default App;
