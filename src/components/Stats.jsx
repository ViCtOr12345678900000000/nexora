const stats = [
  { label: "Total Revenue", value: "124,830", change: "+12.5% vs last month", color: "bg-cyan-400", icon: "$" },
  { label: "Active Users", value: "8,429", change: "+8.2% vs last month", color: "bg-purple-400", icon: "◍" },
  { label: "Conversion Rate", value: "3.4%", change: "+0.6% vs last month", color: "bg-orange-400", icon: "◎" },
  { label: "Churn Rate", value: "2.1%", change: "-0.4% vs last month", color: "bg-rose-400", icon: "⌄" },
]

export default function Stats(){
  return(
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-3 xl:gap-4 2xl:gap-6 w-full">
      {stats.map(s => (
        <div key={s.label} className="bg-[#1c1c3a]/80 xl:bg-[#1c1c3a] border border-white/5 rounded-xl xl:rounded-2xl p-4 xl:p-6 2xl:p-8 flex flex-col justify-between min-h-[110px] xl:min-h-[140px] 2xl:min-h-[160px]">
          <div className={`w-8 h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 rounded-lg xl:rounded-xl ${s.color} grid place-items-center text-black font-bold text-sm xl:text-[16px] 2xl:text-[18px]`}>
            {s.icon}
          </div>
          <div className="mt-4 xl:mt-6">
            <p className="text-white/50 text-[10px] xl:text-[11px] 2xl:text-[12px] uppercase tracking-widest">{s.label}</p>
            <p className="font-bold leading-none mt-1 text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[44px] tracking-tight">{s.value}</p>
            <p className="text-emerald-400 mt-2 text-[10px] xl:text-[11px] 2xl:text-[12px]">{s.change}</p>
          </div>
        </div>
      ))}
    </div>
  )
}