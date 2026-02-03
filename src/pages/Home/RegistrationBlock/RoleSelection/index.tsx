import Button from "@/shared/button";
import RoleCard from "@/components/RoleCard";
import {
    RoleSelectionTexts,
    roleCards,
} from "@/pages/Home/RegistrationBlock/RoleSelection/config";

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
                {roleCards.map((role) => (
                    <RoleCard
                        key={role.id}
                        title={role.title}
                        description={role.description}
                        backgroundImage={role.backgroundImage}
                        icon={role.icon}
                        selected={selectedRole === role.id}
                        onClick={() => onRoleSelect(role.id)}
                    />
                ))}
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
