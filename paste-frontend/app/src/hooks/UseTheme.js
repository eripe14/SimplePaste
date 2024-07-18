import { useEffect, useState } from "react";

const themes = {
    day: {
        background: "#eee",
        color: "#202327",
        boxShadow: "none",
    },
    night: {
        background: "#202327",
        color: "#eee",
        boxShadow: "#202020",
    }
};

const useTheme = () => {
    const [isDark, setDark] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme === "dark" : true;
    });

    const applyTheme = (isDark) => {
        const theme = isDark ? themes.night : themes.day;
        document.documentElement.style.setProperty("--background", theme.background);
        document.documentElement.style.setProperty("--color", theme.color);
        document.documentElement.style.setProperty("--shadow-color", theme.boxShadow);
    };

    useEffect(() => {
        applyTheme(isDark);
    }, [isDark]);

    const toggleTheme = () => {
        setDark(prevIsDark => {
            const newIsDark = !prevIsDark;
            localStorage.setItem("theme", newIsDark ? "dark" : "light");
            return newIsDark;
        });
    };

    return { isDark, toggleTheme };
};

export default useTheme;