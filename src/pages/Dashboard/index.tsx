import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useTranslation } from "@/shared/hooks/useTranslation";
import {
    DashboardMenu,
    DashboardProfileFields,
} from "@/pages/Dashboard/config";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

interface ProfileField {
    name: string;
    label: string;
    type: string;
    readOnly?: boolean;
}

const Dashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();

    const [formData, setFormData] = useState(() => {
        if (location.state?.userData) return location.state.userData;

        const stored = localStorage.getItem("user_data");
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch (e) {
                console.error("Failed to parse user data", e);
            }
        }
    });

    const handleLogout = () => {
        localStorage.removeItem("user_data");
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 sticky top-0 z-10 box-border">
                <div className="flex items-center gap-4">
                    <span className="text-xl font-bold text-gray-800 tracking-wide">
                        {t("dashboard.brandName")}
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <LanguageSwitcher />
                    <div className="relative group">
                        <button className="flex items-center gap-2 focus:outline-none">
                            <div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center"></div>
                        </button>
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50">
                            <button
                                onClick={handleLogout}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                {t("common.logout")}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex flex-1">
                <aside className="w-64 bg-white border-r border-gray-200 pt-6 px-4 hidden md:block min-h-[calc(100vh-64px)]">
                    {DashboardMenu.map(
                        (section: {
                            title: string;
                            items: {
                                label: string;
                                icon: React.ComponentType<{
                                    width?: number;
                                    height?: number;
                                    className?: string;
                                }>;
                            }[];
                        }) => (
                            <div key={section.title} className="mb-6">
                                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">
                                    {t(section.title)}
                                </h3>
                                <div className="space-y-1">
                                    {section.items.map(
                                        (item: {
                                            label: string;
                                            icon: React.ComponentType<{
                                                width?: number;
                                                height?: number;
                                                className?: string;
                                            }>;
                                        }) => {
                                            const Icon = item.icon;
                                            return (
                                                <button
                                                    key={item.label}
                                                    className="w-full flex items-center px-2 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors"
                                                >
                                                    <Icon width={20} height={20} className="mr-3" />
                                                    {t(item.label)}
                                                </button>
                                            );
                                        },
                                    )}
                                </div>
                            </div>
                        ),
                    )}
                </aside>

                <main className="flex-1 bg-white min-h-[calc(100vh-64px)]">
                    <div className="border-b border-gray-200 px-8 py-4 flex justify-between items-center">
                        <button className="text-gray-400 hover:text-gray-600"></button>
                    </div>

                    <div className="max-w-2xl px-8 py-8 space-y-6">
                        {DashboardProfileFields.map((field: ProfileField) => (
                            <div
                                key={field.name}
                                className="grid grid-cols-[200px_1fr] items-center gap-4"
                            >
                                <label className="text-sm text-gray-500">{t(field.label)}</label>
                                <div className="relative group">
                                    <input
                                        type={field.type}
                                        value={formData[field.name as keyof typeof formData] || ""}
                                        readOnly={field.readOnly}
                                        onChange={(e) =>
                                            !field.readOnly &&
                                            setFormData({
                                                ...formData,
                                                [field.name]: e.target.value,
                                            })
                                        }
                                        className={`font-medium text-gray-900 w-full border-b border-transparent focus:border-primary focus:outline-none py-1 bg-transparent ${!field.readOnly
                                            ? "hover:border-gray-200 transition-colors"
                                            : ""
                                            }`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
