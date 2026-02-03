import { useEffect, useState } from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme");
            if (savedTheme === "dark" || savedTheme === "light") {
                return savedTheme;
            }
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                return "dark";
            }
        }
        return "light";
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    const changeTheme = (newTheme: "light" | "dark") => {
        setTheme(newTheme);
    };

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return { theme, changeTheme, toggleTheme };
};
