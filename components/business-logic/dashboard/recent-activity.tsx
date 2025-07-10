interface RecentActivityProps {
  type: string;
  time: string;
  points: number;
  symbol: string;
}

const RecentActivity = ({
  type,
  time,
  points,
  symbol,
}: RecentActivityProps) => {
  return (
    <div className="bg-[#EEFFEF] rounded-xl px-3 py-3 flex justify-between items-center">
      <div className="text-[15px] font-[500] flex flex-col">
        <span className="text-[#000000] ">{type}</span>
        <span className="text-[#959595] ">{time}</span>
      </div>
      <div className="text-[#3F7F51] bg-[#D6FFD8] text-[14px] font-[500] rounded-xl px-5 py-2">
        {symbol}
        {points}
      </div>
    </div>
  );
};

export default RecentActivity;
