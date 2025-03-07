import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router";
import Navigation from "../Navigation";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles["header-inner"]}>
                <div className={styles["header-left"]}>
                    <Link to="/">
                        <img src="./public/vite.svg" alt="logo" />
                    </Link>
                </div>
                <nav className={styles["header-right"]}>
                    <Navigation />
                </nav>
            </div>
        </div>
    );
};

export default Header;
