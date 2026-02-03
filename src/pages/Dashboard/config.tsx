import CarIcon from "@/assets/icons/CarIcon";

export const DashboardTexts = {
    brandName: "TRANSLINE",
};

export const DashboardProfileFields = [
    { name: "lastName", label: "Фамилия", type: "text" },
    { name: "firstName", label: "Имя", type: "text" },
    { name: "middleName", label: "Отчество", type: "text" },
    { name: "phone", label: "Номер телефона", type: "text", readOnly: true },
    { name: "email", label: "Email", type: "email" },
];

export const DashboardMenu = [
    {
        title: "заявки",
        items: [
            { label: "Активные", icon: CarIcon },
            { label: "Архивные", icon: CarIcon },
        ],
    },
    {
        title: "контрагенты",
        items: [
            { label: "Заказчики", icon: CarIcon },
            { label: "Перевозчики", icon: CarIcon },
        ],
    },
    {
        title: "автопарк",
        items: [
            { label: "Транспорт", icon: CarIcon },
        ],
    },
    {
        title: "управление",
        items: [
            { label: "Справочники", icon: CarIcon },
            { label: "Менеджеры", icon: CarIcon },
        ],
    },
];
