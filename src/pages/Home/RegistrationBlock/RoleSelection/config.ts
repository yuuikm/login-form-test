import CustomerCardBg from "@/assets/icons/CustromerCard.svg";
import CarrierCardBg from "@/assets/icons/CarrierCard.svg";
import CustomerIcon from "@/assets/icons/CustomerIcon";
import CarrierIcon from "@/assets/icons/CarrierIcon";

export const RoleSelectionTexts = {
  title: "Регистрация",
  description: "Выберите, как вы хотите использовать приложение",
  buttonText: "ПРОДОЛЖИТЬ",
};

export interface RoleCardData {
  id: "customer" | "carrier";
  title: string;
  description: string;
  backgroundImage: string;
  icon: React.ComponentType;
}

export const roleCards: RoleCardData[] = [
  {
    id: "customer",
    title: "как заказчик",
    description: "Контролируйте выполнение заявок в реальном времени",
    backgroundImage: CustomerCardBg,
    icon: CustomerIcon,
  },
  {
    id: "carrier",
    title: "как перевозчик",
    description: "Получайте актуальную информацию о своих перевозках",
    backgroundImage: CarrierCardBg,
    icon: CarrierIcon,
  },
];
