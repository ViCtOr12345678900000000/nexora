import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { name: 'Jan', revenue: 30 }, { name: 'Feb', revenue: 45 },
  { name: 'Mar', revenue: 35 }, { name: 'Apr', revenue: 65 },
  { name: 'May', revenue: 20 }, { name: 'Jun', revenue: 80 },
  { name: 'Jul', revenue: 60 }, { name: 'Aug', revenue: 50 },
  { name: 'Sep', revenue: 99 }, { name: 'Oct', revenue: 90 },
  { name: 'Nov', revenue: 75 }, { name: 'Dec', revenue: 155 },
];

export default function Revenue() {
  return (
    <div className="bg-[#1a1a2e] border border-white/5 rounded-xl xl:rounded-2xl p-5 xl:p-7 2xl:p-8 h-[380px] lg:h-[360px] xl:h-[420px] 2xl:h-[480px] flex flex-col">
      <div className="flex justify-between items-start mb-4 xl:mb-6">
        <div>
          <h3 className="font-semibold text-[15px] xl:text-[18px] 2xl:text-[20px]">Revenue Over Time</h3>
          <p className="text-white/40 text-[12px] xl:text-[13px] mt-1">Monthly revenue growth for the year</p>
        </div>
        <div className="flex gap-2">
          <span className="text-[11px] xl:text-[12px] bg-white/5 border border-white/10 px-3 py-1 xl:px-4 xl:py-1.5 rounded-full">Monthly</span>
          <span className="text-[11px] xl:text-[12px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 xl:px-4 xl:py-1.5 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> Revenue
          </span>
        </div>
      </div>

      <div className="flex-1 w-full -ml-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }} tickFormatter={(v) => `${v}k`} width={35} />
            <Tooltip contentStyle={{ backgroundColor: '#111115', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '12px' }} />
            <Area type="monotone" dataKey="revenue" stroke="#2dd4bf" strokeWidth={2.5} fillOpacity={1} fill="url(#colorRev)" dot={false} activeDot={{ r: 5, fill: '#2dd4bf' }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}