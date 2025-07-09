import Logo from "@/components/general/logo";
import { CardDescription, CardTitle } from "@/components/ui/card";

const SignUpHeader = () => {
  return (
    <>
      <div className="flex justify-center">
        <Logo />
      </div>
      <CardTitle className="text-2xl font-bold text-gray-900">
        Join ReHarvest
      </CardTitle>
      <CardDescription className="text-gray-600 mt-1">
        Rescue food. Earn GreenPoints. Make a difference.
      </CardDescription>
    </>
  );
};

export default SignUpHeader;
