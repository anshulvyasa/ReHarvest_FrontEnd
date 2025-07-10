import Achievements from "./achievements";
import GreenPointWallet from "./greenpoint-wallet";
import ReedemRewards from "./reedem-rewards-points";

const UserSection = () => {
  return (
    <section className="min-h-screen py-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <GreenPointWallet />
      <div className="flex flex-col gap-10 justify-between">
        <Achievements />
        <ReedemRewards />
      </div>
    </section>
  );
};

export default UserSection;
