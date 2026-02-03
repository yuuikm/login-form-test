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
        relative w-full p-3 rounded-2xl transition-all text-left overflow-hidden bg-white dark:bg-black dark:border dark:border-gray-800
        ${selected ? "ring-4 ring-primary ring-offset-2 dark:ring-offset-black" : "hover:shadow-lg"}
      `}
    >
      <img
        src={backgroundImage}
        alt=""
        className="absolute right-0 bottom-0 h-full object-contain pointer-events-none opacity-80 dark:opacity-60"
      />

      <div className="relative z-10 inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-[#E0F7FC] dark:bg-gray-900 mb-6">
        <Icon />
      </div>

      <div className="relative z-10 max-w-[60%]">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 lowercase">
          {title}
        </h3>
        <p className="text-base text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </button>
  );
};

export default RoleCard;
