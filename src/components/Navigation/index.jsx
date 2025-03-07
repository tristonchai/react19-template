import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router";
import styles from "./Navigation.module.css";

import { motion, AnimatePresence } from "motion/react";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null); // Track hovered NavLink
    const [clickedLink, setClickedLink] = useState({}); // Track hovered NavLink

    const navRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            // console.log(
            //     "navRef: ",
            //     navRef.current,
            //     !navRef.current.contains(e.target),
            //     navRef.current.contains(e.target),
            //     e.target
            // );
            if (navRef.current && !navRef.current.contains(e.target)) {
                setClickedLink({});
                setIsOpen(false);
            }
        };

        // Add listener to document
        document.addEventListener("mousedown", handleClickOutside);

        // cleanup listener on unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleToggleMenu = () => {
        console.log("clicked");
        setIsOpen((prev) => !prev);
    };

    const handleMouseOver = (path) => {
        // console.log("handleMouseOver: ", path, hoveredLink);
        setHoveredLink(path); // Set hovered link path
    };

    const handleMouseOut = () => {
        // console.log("handleMouseOut: ", hoveredLink);
        setHoveredLink(null); // Clear hover state
    };

    const handleToggleSubmenu = (path) => {
        setClickedLink((prev) => ({
            ...prev,
            [path]: !prev[path], // Toggle submenu state for this path
        }));
    };

    return (
        <div className={styles.navigation} ref={navRef}>
            <button
                className={styles["burger-menu"]}
                onClick={handleToggleMenu}
            >
                <div className={` ${isOpen ? styles.open : styles.close}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            {/* Mobile Menu */}
            <>
                <AnimatePresence initial={false}>
                    {isOpen ? (
                        <motion.div
                            className={`${styles["mobile-navi-outer"]}`}
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{
                                duration: 0.3,
                                // ease: "easeIn",
                                // type: "spring",
                                // delay: 0.5,
                            }} // repeat: Infinity
                        >
                            <ul
                                className={`${styles["mobile-navi"]} ${
                                    isOpen ? styles.expand : styles.collapse
                                }`}
                            >
                                <li
                                    onMouseOver={() => handleMouseOver("/")}
                                    onMouseOut={handleMouseOut}
                                >
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li
                                    className={`${styles["has-submenu"]} ${
                                        clickedLink["/projects"]
                                            ? styles["submenu-active"]
                                            : ""
                                    }`}
                                >
                                    <NavLink
                                        onClick={() =>
                                            handleToggleSubmenu("/projects")
                                        }
                                    >
                                        Projects
                                    </NavLink>
                                    <AnimatePresence initial={false}>
                                        {clickedLink["/projects"] ? (
                                            <motion.div
                                                className={`${styles["sub-navi"]}`}
                                                initial={{ height: 0 }}
                                                animate={{ height: "auto" }}
                                                exit={{ height: 0 }}
                                                transition={{
                                                    duration: 0.3,
                                                    // ease: "easeIn",
                                                    // type: "spring",
                                                    // delay: 0.5,
                                                }} // repeat: Infinity
                                                // initial={{
                                                //     opacity: 0,
                                                //     scale: 0,
                                                // }}
                                                // animate={{
                                                //     opacity: 1,
                                                //     scale: 1,
                                                // }}
                                                // exit={{ opacity: 0, scale: 0 }}
                                                // transition={{
                                                //     duration: 0.3,
                                                //     type: "spring",
                                                // }}
                                            >
                                                <ul>
                                                    <li>
                                                        <NavLink to="/projects">
                                                            My Projects
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/projects/case01">
                                                            Case 01
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/projects/case02">
                                                            Case 02
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </motion.div>
                                        ) : null}
                                    </AnimatePresence>
                                </li>
                                <li
                                    onMouseOver={() =>
                                        handleMouseOver("/contact")
                                    }
                                    onMouseOut={handleMouseOut}
                                >
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </>

            {/* Desktop Menu */}
            <ul className={styles["desktop-navi"]}>
                <li
                    onMouseOver={() => handleMouseOver("/")}
                    onMouseOut={handleMouseOut}
                >
                    <NavLink to="/">Home</NavLink>
                </li>
                <li
                    onMouseOver={() => handleMouseOver("/projects")}
                    onMouseOut={handleMouseOut}
                    className={styles["has-submenu"]}
                >
                    <NavLink to="/projects">Projects</NavLink>
                    <AnimatePresence initial={false}>
                        {hoveredLink === "/projects" ? (
                            <motion.div
                                className={`${styles["sub-navi"]}`}
                                // initial={{ height: 0 }}
                                // animate={{ height: "auto" }}
                                // exit={{ height: 0 }}
                                // transition={{
                                //     duration: 0.3,
                                //     // ease: "easeIn",
                                //     // type: "spring",
                                //     // delay: 0.5,
                                // }} // repeat: Infinity
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ duration: 0.3, type: "spring" }}
                            >
                                <ul>
                                    <li>
                                        <NavLink to="/projects/case01">
                                            Case 01
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/projects/case02">
                                            Case 02
                                        </NavLink>
                                    </li>
                                </ul>
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
                </li>
                <li
                    onMouseOver={() => handleMouseOver("/contact")}
                    onMouseOut={handleMouseOut}
                >
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
