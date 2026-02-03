import { useTheme } from "@/shared/hooks/useTheme";

export const ThemeSwitcher = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeTheme("light")}
        className={`px-2 py-1 text-sm rounded transition-colors ${theme === "light"
          ? "bg-primary text-white font-medium"
          : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          }`}
      >
        Light
      </button>
      <button
        onClick={() => changeTheme("dark")}
        className={`px-2 py-1 text-sm rounded transition-colors ${theme === "dark"
          ? "bg-primary text-white font-medium"
          : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          }`}
      >
        Dark
      </button>
    </div>
  );
};
