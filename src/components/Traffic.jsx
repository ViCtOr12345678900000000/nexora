const trafficData = [
  { name: 'Direct', value: 45, color: 'bg-emerald-400' },
  { name: 'Organic Search', value: 30, color: 'bg-teal-400' },
  { name: 'Social Media', value: 15, color: 'bg-blue-400' },
  { name: 'Referrals', value: 10, color: 'bg-white/20' },
];

export default function Traffic() {
  return (
    <div className="bg-[#404055] border border-white/5 rounded-xl p-5 h-[360px] mt-5">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-[14px]">Traffic Source</h3>
        <span className="text-[11px] text-white/30">Last 30 days</span>
      </div>

      {/* Donut Visual - simple CSS */}
      <div className="flex justify-center my-4">
        <div className="relative w-32 h-32 rounded-full flex items-center justify-center"
             style={{ background: `conic-gradient(#2dd4bf 0% 45%, #2dd4bf80 45% 75%, #60a5fa 75% 90%, rgba(255,255,255,0.15) 90% 100%)` }}>
          <div className="w-20 h-20 bg-[#1a1a1f] rounded-full flex flex-col items-center justify-center">
            <span className="text-[18px] font-bold">12.4k</span>
            <span className="text-[10px] text-white/40">Visitors</span>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="space-y-3 mt-6">
        {trafficData.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
              <span className="text-[12px] text-white/70">{item.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-20 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className={`h-full ${item.color}`} style={{ width: `${item.value}%` }}></div>
              </div>
              <span className="text-[12px] w-8 text-right">{item.value}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}