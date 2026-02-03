import Button from "@/shared/button";
import RoleCard from "@/components/RoleCard";
import { useTranslation } from "@/shared/hooks/useTranslation";
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
    const { t } = useTranslation();

    return (
        <div className="w-full">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                {t(RoleSelectionTexts.title)}
            </h2>
            <p className="text-gray-600 mb-8">{t(RoleSelectionTexts.description)}</p>

            <div className="space-y-4 mb-8">
                {roleCards.map((role) => (
                    <RoleCard
                        key={role.id}
                        title={t(role.title)}
                        description={t(role.description)}
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
                {t(RoleSelectionTexts.buttonText)}
            </Button>
        </div>
    );
};

export default RoleSelection;
