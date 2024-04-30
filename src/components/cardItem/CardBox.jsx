import { CardHotTrendItem } from './CardHotTrendItem'; 

export const CardBox = ({ hotTrends }) => {
  return (
    <div className="">
      <h1 className='text-6xl bg-gradient-to-r from-red-400 from-800% via-[#929292] via-30% to-emerald-500 to-20% bg-clip-text text-transparent'>Tendencias</h1>
      <div className="grid grid-cols-2 sm:grid sm:grid-cols-2 md:grid md:grid-cols-6 lg:grid lg:grid-cols-6 xl:grid xl:grid-cols-6 max-auto gap-3">
        {hotTrends?.slice(0, 2).map((hotTrend) => (
          <div className="border-none w-full col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2 h-64" key={hotTrend.id}>
            <CardHotTrendItem hotTrend={hotTrend} />
          </div>
        ))}
        {hotTrends?.slice(2, 6).map((hotTrend) => (
          <div className="border-none w-full col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2 h-64"  key={hotTrend.id}>
            <CardHotTrendItem hotTrend={hotTrend} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardBox;
