import NannyPackages from "../Services/nannyPackage";
import ElderlyCarePackages from "../Services/elderlyCarePackages";
import DriverPackageCards from "../Services/driverServicePackages";
import ChefPackageCards from "../Services/chefServicePackages";
import BabySittingCards from "../Services/babySittingPackages";
import HouseKeepingPackagesCards from "../Services/houseKeepingPackages";

const ServicePage = () => {
  return (
    <div className="w-full">
      <section id="nanny-services" className="scroll-mt-6 w-full">
        <NannyPackages />
      </section>

      <section id="elderly-care" className="scroll-mt-6 w-full">
        <div className="mx-auto max-w-screen-xl px-5 md:px-6">
          <ElderlyCarePackages />
        </div>
      </section>

      <section id="driver-services" className="scroll-mt-6 w-full">
        <DriverPackageCards />
      </section>

      <section id="chef-services" className="scroll-mt-6 w-full">
        <div className="mx-auto max-w-screen-xl px-5 md:px-6">
          <ChefPackageCards />
        </div>
      </section>

      <section id="babysitting" className="scroll-mt-6 w-full">
        <BabySittingCards />
      </section>

      <section id="housekeeping" className="scroll-mt-6 w-full">
        <div className="mx-auto max-w-screen-xl px-5 md:px-6">
          <HouseKeepingPackagesCards />
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
