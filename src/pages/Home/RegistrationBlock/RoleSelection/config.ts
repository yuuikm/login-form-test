import CustomerCardBg from "@/assets/icons/CustromerCard.svg";
import CarrierCardBg from "@/assets/icons/CarrierCard.svg";
import CustomerIcon from "@/assets/icons/CustomerIcon";
import CarrierIcon from "@/assets/icons/CarrierIcon";

export const RoleSelectionTexts = {
  title: "registration.roleSelection.title",
  description: "registration.roleSelection.description",
  buttonText: "common.continue",
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
    title: "registration.roleSelection.customer.title",
    description: "registration.roleSelection.customer.description",
    backgroundImage: CustomerCardBg,
    icon: CustomerIcon,
  },
  {
    id: "carrier",
    title: "registration.roleSelection.carrier.title",
    description: "registration.roleSelection.carrier.description",
    backgroundImage: CarrierCardBg,
    icon: CarrierIcon,
  },
];
