import { InfoBlockTexts } from "@/pages/Home/InfoBlock/config";
import Logo from "@/assets/icons/Logo.svg";

function InfoBlock() {
  return (
    <div className="flex w-1/2 bg-primary flex-col px-16 pt-24">
      <img className="w-[55px] h-[46px] mb-5" src={Logo} alt="Logo" />

      <h1 className="text-6xl text-white font-semibold leading-tight">
        {InfoBlockTexts.title}
      </h1>
    </div>
  );
}

export default InfoBlock;
