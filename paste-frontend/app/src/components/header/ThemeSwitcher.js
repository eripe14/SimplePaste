import useTheme from "../../hooks/UseTheme";
import dayMode from "../../assets/day-mode.png";
import nightMode from "../../assets/night-mode.png";

export default function ThemeSwitcher() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <img
            src={isDark ? dayMode : nightMode}
            alt={isDark ? "DayMode" : "NightMode"}
            onClick={toggleTheme}
        />
    );
}