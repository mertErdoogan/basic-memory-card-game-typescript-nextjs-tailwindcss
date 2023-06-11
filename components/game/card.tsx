const Card = ({ symbol, side }: { symbol: string; side: boolean }) => {
  return (
    <>
      <div className="bg-amber-500 cursor-pointer h-24 md:h-64 flex items-center justify-center text-amber-900">
        <p className="text-2xl md:text-7xl p-4 rounded select-none font-bold">
          {side && symbol}
        </p>
      </div>
    </>
  );
};

export default Card;
