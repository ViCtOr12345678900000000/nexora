const stats = [
  { label: "Total Revenue", value: "124,830", change: "+12.5% vs last month", color: "bg-cyan-400", icon: "$" },
  { label: "Active Users", value: "8,429", change: "+8.2% vs last month", color: "bg-purple-400", icon: "◍" },
  { label: "Conversion Rate", value: "3.4%", change: "+0.6% vs last month", color: "bg-orange-400", icon: "◎" },
  { label: "Churn Rate", value: "2.1%", change: "-0.4% vs last month", color: "bg-rose-400", icon: "⌄" },
]

export default function Stats(){
  return(
    <div className="grid grid-cols-2 md:flex lg:flex gap-2 lg:justify-center">
      {stats.map(s => (
        <div key={s.label} className="bg-sky-300/60 border border-white/5 rounded-sm p-5 lg:w-90 md:w-90">
          <div className={`w-8 h-8 rounded-md ${s.color} grid place-items-center text-black font-bold text-sm mb-3`}>
            {s.icon}
          </div>
          <p className="text- text-white/50 text-[10px]">{s.label}</p>
          <p className="text- font-bold leading-none mt-1 lg:text-[50px] text-[25px]">{s.value}</p>
          <p className="text- text-emerald-400 mt-2 text-[10px]">{s.change}</p>
        </div>
      ))}
    </div>
  )
}