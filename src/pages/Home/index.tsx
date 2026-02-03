import InfoBlock from "@/pages/Home/InfoBlock";
import RegistrationBlock from "@/pages/Home/RegistrationBlock";
import ProgressHeader from "@/components/ProgressHeader";

function Home() {
  return (
    <>
      <div className="h-screen w-screen flex">
        <InfoBlock />
        <RegistrationBlock />
      </div>
      <ProgressHeader />
    </>
  );
}

export default Home;
