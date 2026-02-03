import RoleCard from "@/components/RoleCard";
import Button from "@/shared/button";
import CarIcon from "@/assets/icons/CarIcon";
import MapMarkerIcon from "@/assets/icons/MapMarkerIcon";
import { RoleSelectionTexts } from "@/pages/Home/RegistrationBlock/RoleSelection/config";

interface RoleSelectionProps {
  selectedRole: "customer" | "carrier" | null;
  onRoleSelect: (role: "customer" | "carrier") => void;
  onContinue: () => void;
}

const RoleSelection = ({
  selectedRole,
  onRoleSelect,
  onContinue,
}: RoleSelectionProps) => {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">
        {RoleSelectionTexts.title}
      </h2>
      <p className="text-gray-600 mb-8">{RoleSelectionTexts.description}</p>

      <div className="space-y-4 mb-8">
        <RoleCard
          title={RoleSelectionTexts.customerTitle}
          description={RoleSelectionTexts.customerDescription}
          icon={<MapMarkerIcon width={40} height={50} />}
          selected={selectedRole === "customer"}
          onClick={() => onRoleSelect("customer")}
        />
        <RoleCard
          title={RoleSelectionTexts.carrierTitle}
          description={RoleSelectionTexts.carrierDescription}
          icon={<CarIcon width={50} height={36} />}
          selected={selectedRole === "carrier"}
          onClick={() => onRoleSelect("carrier")}
        />
      </div>

      <Button
        variant={selectedRole ? "active" : "inactive"}
        fullWidth
        disabled={!selectedRole}
        onClick={onContinue}
      >
        {RoleSelectionTexts.buttonText}
      </Button>
    </div>
  );
};

export default RoleSelection;
