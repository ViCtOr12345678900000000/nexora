// Growth.jsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
const growthData = [
  { name: 'Mon', users: 200 }, { name: 'Tue', users: 350 },
  { name: 'Wed', users: 580 }, { name: 'Thu', users: 500 },
  { name: 'Fri', users: 400 }, { name: 'Sat', users: 650 },
  { name: 'Sun', users: 200 },
];

export default function Growth() {
  return (
    <div className="bg-[#1a1a2e] border border-white/5 rounded-xl xl:rounded-2xl p-5 xl:p-7 2xl:p-8 h-[360px] xl:h-[400px] 2xl:h-[460px] flex flex-col">
      <div className="flex justify-between items-start mb-4 xl:mb-6">
        <div>
          <h3 className="font-semibold text-[14px] xl:text-[18px] 2xl:text-[20px]">User Growth</h3>
          <p className="text-white/40 text-[11px] xl:text-[13px] mt-1">New users acquired this week</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[20px] xl:text-[26px] 2xl:text-[30px] font-bold">+842</span>
          <span className="text-[11px] xl:text-[12px] bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full">+12%</span>
        </div>
      </div>
      <div className="flex-1 w-full -ml-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={growthData} barCategoryGap="30%">
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10 }} width={30} />
            <Tooltip cursor={{ fill: 'rgba(255,255,255,0.03)' }} contentStyle={{ backgroundColor: '#111115', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} />
            <Bar dataKey="users" fill="#2dd4bf" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}