import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const growthData = [
  { name: 'Mon', users: 200 },
  { name: 'Tue', users: 350 },
  { name: 'Wed', users: 580 },
  { name: 'Thu', users: 500 },
  { name: 'Fri', users: 400 },
  { name: 'Sat', users: 650 },
  { name: 'Sun', users: 200 },
];

export default function Growth() {
  return (
    <div className="bg-[#1f1f40] border border-white/5 rounded-xl p-5 h-[360px] lg:h-[290px] md:h-[290px] mt-5 lg:mb-5 md:mb-5">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-[14px]">User Growth</h3>
          <p className="text-white/40 text-[11px] mt-1">New users acquired this week</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[20px] font-bold">+842</span>
          <span className="text-[11px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full">+12%</span>
        </div>
      </div>

      <div className="h-[270px] lg:h-[200px] md:h-[200px] w-full -ml-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={growthData} barCategoryGap="30%">
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10 }} width={30} />
            <Tooltip
              cursor={{ fill: 'rgba(255,255,255,0.03)' }}
              contentStyle={{ backgroundColor: '#111115', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '12px' }}
            />
            <Bar dataKey="users" fill="#2dd4bf" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}