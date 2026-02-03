import { useTranslation } from "@/shared/hooks/useTranslation";
import { InfoBlockTexts } from "@/pages/Home/InfoBlock/config";
import Logo from "@/assets/icons/Logo.svg";

function InfoBlock() {
  const { t } = useTranslation();
  return (
    <div className="flex w-full lg:w-1/2 bg-primary flex-col p-8 pt-12 lg:px-16 lg:pt-24">
      <img className="w-[55px] h-[46px] mb-5" src={Logo} alt="Logo" />

      <h1 className="text-3xl lg:text-6xl text-white font-semibold leading-tight">
        {t(InfoBlockTexts.title)}
      </h1>
    </div>
  );
}

export default InfoBlock;
