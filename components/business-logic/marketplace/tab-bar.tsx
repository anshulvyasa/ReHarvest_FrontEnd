import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MarketPlaceTabBarProps {
  state: string;
  setState: React.Dispatch<
    React.SetStateAction<"all" | "edible" | "non-edible" | "recycle">
  >;
}

const options = [
  { label: "All", value: "all" },
  { label: "Edible", value: "edible" },
  { label: "Non-edible", value: "non-edible" },
  { label: "Recyclables", value: "recycle" },
];

const MarketPlaceTabBar = ({ state, setState }: MarketPlaceTabBarProps) => {

  return (
    <div className="bg-[#E1DFDF] rounded-2xl w-full flex justify-between px-3 py-2 border">
      <div className="text-[#468168]   text-[14px] lg:text-[16px] font-[500] ">
        <h1>Imperfect Goods</h1>
        <h2>Marketplace</h2>
      </div>
      <div className="flex space-x-2">
        {/* for mobile  */}
        <div className="flex items-center">
          <Select
            value={state.toLowerCase()}
            onValueChange={(val: "all" | "edible" | "non-edible" | "recycle") =>
              setState(val)
            }
          >
            <SelectTrigger className="border !border-[#CACACA] bg-white rounded-xl !text-black text-[14px] font-[500] flex items-center justify-between pl-4 py-2 focus:outline-none focus-visible:outline-none">
              <SelectValue />
            </SelectTrigger>

            <SelectContent
              className="bg-white text-black border-none font-[500] hide-scrollbar"
              align="end"
              side="bottom"
              avoidCollisions={false}
            >
              {options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="hidden tabbar-1:flex items-center">
          <Select>
            <SelectTrigger className="border !border-[#CACACA] bg-white rounded-xl  !text-black text-[14px] font-[500] flex items-center justify-between pl-4 py-2 focus:outline-none focus-visible:outline-none">
              <span className="mr-2">Popularity</span>
            </SelectTrigger>
            <SelectContent className="bg-white text-black border-none font-[500]">
              <SelectItem value="very-popular">Very Popular</SelectItem>
              <SelectItem value="most-loved">Most Loved</SelectItem>
              <SelectItem value="premium">Premium</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default MarketPlaceTabBar;
