import Achievements from "./achievements";
import GreenPointWallet from "./greenpoint-wallet";
import ReedemRewards from "./reedem-rewards-points";

const UserSection = () => {
  return (
    <section className="h-screen grid grid-cols-1 lg:grid-cols-2 gap-8">
      <GreenPointWallet />
      <div className="flex flex-col justify-between">
        <Achievements />
        <ReedemRewards />
      </div>
    </section>
  );
};

export default UserSection;
