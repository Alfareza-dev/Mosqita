import React from 'react';

interface District {
  id: string;
  name: string;
  cases: number;
  status: string;
  trend_desc: string;
}

interface RiskMapCardProps {
  districts: District[];
}

const getStatusColor = (status: string) => {
  if (status.includes("Merah")) return { text: "text-red-500", bg: "bg-red-500", dot: "🔴" };
  if (status.includes("Waspada")) return { text: "text-orange-500", bg: "bg-orange-500", dot: "🟠" };
  if (status.includes("Siaga")) return { text: "text-amber-400", bg: "bg-amber-400", dot: "🟡" };
  return { text: "text-emerald-500", bg: "bg-emerald-500", dot: "🟢" };
};

export const RiskMapCard = ({ districts }: RiskMapCardProps) => {
  // Find highest case count to calculate 100% progress
  const maxCases = Math.max(...districts.map(d => d.cases), 1);

  return (
    <div className="w-full flex flex-col gap-4 mt-2">
      <h2 className="text-stone-200 text-lg font-bold leading-7">Indeks Risiko Kecamatan</h2>
      <div className="w-full bg-stone-900 rounded-[32px] p-6 border border-stone-800/80 shadow-md">
        <ul className="flex flex-col gap-5">
          {districts.map((item, idx) => {
            const colors = getStatusColor(item.status);
            const percentage = Math.min(100, Math.round((item.cases / maxCases) * 100));

            return (
              <li key={idx} className="flex flex-col gap-2 group">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <span className="text-xl group-hover:scale-110 transition-transform">{colors.dot}</span>
                    <div className="flex flex-col">
                      <span className="text-stone-200 font-semibold text-sm leading-tight">{item.name}</span>
                      <span className={`${colors.text} text-[11px] font-medium mt-0.5`}>
                        {item.status} ({item.trend_desc})
                      </span>
                    </div>
                  </div>
                  
                  {/* Absolute Count */}
                  <div className="flex flex-col items-end">
                    <span className="text-stone-200 font-black text-lg leading-tight">{item.cases}</span>
                    <span className="text-stone-500 text-[10px] uppercase font-bold tracking-wider">Kasus</span>
                  </div>
                </div>

                {/* Horizontal Progress Bar */}
                <div className="w-full h-1.5 bg-stone-800 rounded-full overflow-hidden ml-9" style={{ width: 'calc(100% - 36px)' }}>
                  <div 
                    className={`h-full ${colors.bg} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
