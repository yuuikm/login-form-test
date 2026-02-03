import React from "react";

interface RoleCardProps {
  title: string;
  description: string;
  backgroundImage: string;
  icon: React.ComponentType;
  selected: boolean;
  onClick: () => void;
}

const RoleCard = ({
  title,
  description,
  backgroundImage,
  icon: Icon,
  selected,
  onClick,
}: RoleCardProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative w-full p-3 rounded-2xl transition-all text-left overflow-hidden bg-white
        ${selected ? "ring-4 ring-primary ring-offset-2" : "hover:shadow-lg"}
      `}
    >
      <img
        src={backgroundImage}
        alt=""
        className="absolute right-0 bottom-0 h-full object-contain pointer-events-none"
      />

      <div className="relative z-10 inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-[#E0F7FC] mb-6">
        <Icon />
      </div>

      <div className="relative z-10 max-w-[60%]">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 lowercase">
          {title}
        </h3>
        <p className="text-base text-gray-600">{description}</p>
      </div>
    </button>
  );
};

export default RoleCard;
