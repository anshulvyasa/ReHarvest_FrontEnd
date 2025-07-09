import { Leaf } from "lucide-react";

const Logo = () => {
  return (
    <div className="h-12 w-12 flex items-center justify-center bg-green-800 hover:bg-green-900 rounded-xl">
      <Leaf className="h-8 w-8 text-gray-100 p-1" />
    </div>
  );
};

export default Logo;
