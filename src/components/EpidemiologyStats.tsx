import React from 'react';
import { TrendUpIcon } from './Icons';

interface EpidemiologyStatsProps {
  summary: {
    year?: number;
    deaths: number;
    recovered: number;
    total_cases: number;
  };
  trend: Array<{ year: string; cases: number; deaths: number }>;
}

export const EpidemiologyStats = ({ summary, trend }: EpidemiologyStatsProps) => {
  // Sparkline calculation with dynamic min-max scaling for dramatic curve
  const height = 150;
  const width = 400;
  
  const casesArray = trend.map(t => t.cases);
  const maxCases = Math.max(...casesArray);
  const minCases = Math.min(...casesArray);
  const range = maxCases - minCases || 1; // fallback if all equal
  
  // Padding so dots don't clip the edges of the SVG canvas
  const paddingTop = 20;
  const paddingBottom = 20;
  const drawHeight = height - paddingTop - paddingBottom;
  
  // Calculate points
  const pointsData = trend.map((t, i) => {
    // Distribute X evenly across total width
    const x = i === 0 ? 0 : i === trend.length - 1 ? width : (width / (trend.length - 1)) * i;
    // Y inverted (SVG 0 is top) and scaled to draw area
    const normalizedY = (t.cases - minCases) / range;
    const y = paddingTop + drawHeight - (normalizedY * drawHeight);
    return { x, y, val: t.cases, year: t.year };
  });

  const pathPoints = pointsData.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {/* Total Terkonfirmasi (Hero Card) */}
      <div className="col-span-1 md:col-span-2 p-6 md:p-8 relative bg-stone-900 rounded-[32px] flex flex-col gap-6 overflow-hidden shadow-sm border border-stone-800/50">
        <div className="flex justify-between items-start z-10 w-full mb-1">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-red-200 text-xs font-semibold uppercase leading-4 tracking-wider">
              TOTAL TERKONFIRMASI
            </h3>
            <span className="text-stone-400 text-[10px] uppercase">(AKUMULATIF TAHUN {summary.year || 2026})</span>
          </div>
          <div className="px-2.5 py-1 bg-red-800/20 rounded-lg inline-flex items-center gap-1.5 border border-red-800/30">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            <span className="text-red-300 text-[10px] font-bold uppercase leading-3 tracking-wider">
              TREN NAIK
            </span>
          </div>
        </div>
        
        <div className="flex flex-col gap-0 z-10">
          <div className="flex items-baseline gap-2">
            <span className="text-red-300 text-5xl md:text-6xl font-black leading-none">{summary.total_cases}</span>
            <span className="text-red-300/60 text-lg font-bold">Kasus</span>
          </div>
        </div>
        
        {/* Sparkline Chart Container */}
        <div className="w-full mt-6 pt-2 flex flex-col gap-2 z-10 relative">
          {/* Chart Wrapper for stretching */}
          <div className="w-full h-32 md:h-64 relative">
            <svg className="w-full h-full overflow-visible" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
              {/* Gradient Area under line */}
              <defs>
                <linearGradient id="spark-grad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="rgb(248, 113, 113)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="rgb(248, 113, 113)" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <polygon 
                 points={`0,${height} ${pathPoints} ${width},${height}`} 
                 fill="url(#spark-grad)" 
              />
              {/* Elegant Line */}
              <polyline
                points={pathPoints}
                fill="none"
                stroke="#fb7185"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              {/* Data Dots (Outer) */}
              {pointsData.map((p, i) => (
                <circle 
                  key={`outer-${i}`} 
                  cx={p.x} 
                  cy={p.y} 
                  r="4" 
                  fill="#1c1917" // match card bg
                  stroke="#fb7185" 
                  strokeWidth="1.5" 
                />
              ))}
              {/* Data Dots (Inner) */}
              {pointsData.map((p, i) => (
                <circle 
                  key={`inner-${i}`} 
                  cx={p.x} 
                  cy={p.y} 
                  r="1.5" 
                  fill="#fb7185" 
                />
              ))}
            </svg>
          </div>
          {/* Labels */}
          <div className="flex justify-between w-full mt-1 relative">
            {pointsData.map((p, i) => (
              <span key={i} className={`text-stone-500 font-medium ${
                i === 0 ? 'text-left text-[10px] md:text-xs' :
                i === pointsData.length - 1 ? 'text-right text-[10px] md:text-xs' :
                'text-center text-[10px] md:text-xs'
              }`}>
                {p.year}
              </span>
            ))}
          </div>
        </div>
        
        {/* Glow Effect */}
        <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-red-500/10 rounded-full blur-[48px] pointer-events-none" />
      </div>

      {/* Sembuh */}
      <div className="col-span-1 p-6 md:p-8 bg-stone-900 rounded-[32px] flex flex-col gap-4 shadow-sm border border-stone-800/50 justify-between">
        <h3 className="text-teal-400 text-xs font-semibold uppercase tracking-wider">
          SEMBUH
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-teal-400 text-4xl md:text-5xl font-black leading-none">{summary.recovered}</span>
          <span className="text-teal-400/60 text-sm font-bold">Pasien</span>
        </div>
      </div>

      {/* Kematian */}
      <div className="col-span-1 p-6 md:p-8 bg-stone-900 rounded-[32px] flex flex-col gap-4 shadow-sm border border-stone-800/50 justify-between">
        <h3 className="text-stone-400 text-xs font-semibold uppercase tracking-wider">
          KEMATIAN
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-stone-300 text-4xl md:text-5xl font-black leading-none">{summary.deaths}</span>
          <span className="text-stone-500/80 text-sm font-bold">Jiwa</span>
        </div>
      </div>
    </div>
  );
};
