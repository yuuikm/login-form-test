import CarIcon from "@/assets/icons/CarIcon";

// export const DashboardTexts = {
//    brandName: "TRANSLINE",
// };

export const DashboardProfileFields = [
    { name: "lastName", label: "dashboard.profile.lastName", type: "text" },
    { name: "firstName", label: "dashboard.profile.firstName", type: "text" },
    { name: "middleName", label: "dashboard.profile.middleName", type: "text" },
    { name: "phone", label: "dashboard.profile.phone", type: "text", readOnly: true },
    { name: "email", label: "dashboard.profile.email", type: "email" },
];

export const DashboardMenu = [
    {
        title: "dashboard.menu.requests",
        items: [
            { label: "dashboard.menu.active", icon: CarIcon },
            { label: "dashboard.menu.archived", icon: CarIcon },
        ],
    },
    {
        title: "dashboard.menu.counterparties",
        items: [
            { label: "dashboard.menu.customers", icon: CarIcon },
            { label: "dashboard.menu.carriers", icon: CarIcon },
        ],
    },
    {
        title: "dashboard.menu.fleet",
        items: [
            { label: "dashboard.menu.transport", icon: CarIcon },
        ],
    },
    {
        title: "dashboard.menu.management",
        items: [
            { label: "dashboard.menu.directories", icon: CarIcon },
            { label: "dashboard.menu.managers", icon: CarIcon },
        ],
    },
];
