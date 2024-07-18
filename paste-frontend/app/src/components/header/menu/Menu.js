import MenuItem from "./MenuItem";
import { useEffect, useRef, useState } from "react";
import menuDark from "../../../assets/menu-dark.png";
import menuLight from "../../../assets/menu-light.png";
import useTheme from "../../../hooks/UseTheme";

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const { isDark, toggleTheme } = useTheme();

    const rotate = {
        transition: "transform 0.3s ease-in-out",
        transform: isOpen ? "rotate(90deg)" : "rotate(0)"
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="menu-container" ref={menuRef}>
            <img
                src={isDark ? menuLight : menuDark}
                alt="Menu"
                className="menu-image"
                style={rotate}
                onClick={() => setIsOpen(!isOpen)}
            />
            <ul className={`menu-list ${isOpen ? 'open' : ''}`}>
                <MenuItem content="Dashboard" consumer={() => window.location.href = "/"}/>
                <MenuItem content="Switch theme" consumer={toggleTheme}/>
            </ul>
        </div>
    );
}