import InfoBlock from "@/pages/Home/InfoBlock";
import RegistrationBlock from "@/pages/Home/RegistrationBlock";
import ProgressHeader from "@/components/ProgressHeader";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

function Home() {
  return (
    <>
      <div className="h-screen w-screen flex">
        <InfoBlock />
        <RegistrationBlock />
        <div className="absolute top-6 right-6">
          <LanguageSwitcher />
        </div>
      </div>
      <ProgressHeader />
    </>
  );
}

export default Home;
