import React, { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Button from "../button/Button";
import Menu from "./menu/Menu";

export default function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const isTablet = windowWidth <= 1024;
    const isPhone = windowWidth <= 768;

    const buttonStyle = {
        marginLeft: "auto",
        marginRight: "20px",
    }

    return (
        <header className="header">
            {isTablet ? (
                <>
                    <a href={"/"} style={{textDecoration: "none", color: "var(--color)"}}>
                        <h1 className="header-title">{isPhone ? "SimplePaste" : "SimplePaste - A simple paste service"}</h1>
                    </a>
                    <Menu/>
                </>
            ) : (
                <>
                    <ThemeSwitcher/>
                    <a href={"/"} style={{textDecoration: "none", color: "var(--color)"}}>
                        <h1 className="header-title">SimplePaste - A simple paste service</h1>
                    </a>
                    <Button content={"Dashboard"} destination={"/dashboard"} additionalStyle={buttonStyle}/>
                </>
            )}
        </header>
    )
}