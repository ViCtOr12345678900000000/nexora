// Traffic.jsx
const trafficData = [
  { name: 'Direct', value: 45, color: 'bg-emerald-400' },
  { name: 'Organic Search', value: 30, color: 'bg-teal-400' },
  { name: 'Social Media', value: 60, color: 'bg-blue-400' },
  { name: 'Referrals', value: 30, color: 'bg-white/20' },
];

export default function Traffic() {
  return (
    <div className="bg-[#1a1a2e] border border-white/5 rounded-xl xl:rounded-2xl p-5 xl:p-7 2xl:p-8 h-[380px] lg:h-[360px] xl:h-[420px] 2xl:h-[480px] flex flex-col">
      <div className="flex justify-between items-center mb-6 xl:mb-8">
        <h3 className="font-semibold text-[14px] xl:text-[18px] 2xl:text-[20px]">Traffic Source</h3>
        <span className="text-[11px] xl:text-[12px] text-white/30">Last 30 days</span>
      </div>

      <div className="flex justify-center my-2 xl:my-4">
        <div className="relative w-32 h-32 xl:w-40 xl:h-40 2xl:w-48 2xl:h-48 rounded-full flex items-center justify-center"
             style={{ background: `conic-gradient(#2dd4bf 0% 45%, #2dd4bf80 45% 75%, #60a5fa 75% 90%, rgba(255,255,255,0.15) 90% 100%)` }}>
          <div className="w-20 h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 bg-[#1a1a2e] rounded-full flex flex-col items-center justify-center">
            <span className="text-[18px] xl:text-[22px] 2xl:text-[26px] font-bold">125.4k</span>
            <span className="text-[10px] xl:text-[11px] text-white/40">Visitors</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 xl:space-y-4 mt-auto">
        {trafficData.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 xl:w-2.5 xl:h-2.5 rounded-full ${item.color}`}></div>
              <span className="text-[12px] xl:text-[13px] 2xl:text-[14px] text-white/70">{item.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-20 xl:w-28 2xl:w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className={`h-full ${item.color}`} style={{ width: `${item.value}%` }}></div>
              </div>
              <span className="text-[12px] xl:text-[13px] w-8 text-right">{item.value}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}