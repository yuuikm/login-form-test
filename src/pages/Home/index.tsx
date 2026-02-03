import InfoBlock from "@/pages/Home/InfoBlock";
import RegistrationBlock from "@/pages/Home/RegistrationBlock";
import ProgressHeader from "@/components/ProgressHeader";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

function Home() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col lg:flex-row">
        <InfoBlock />
        <RegistrationBlock />
        <div className="absolute top-6 right-6 flex items-center gap-2">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
      <ProgressHeader />
    </>
  );
}

export default Home;
