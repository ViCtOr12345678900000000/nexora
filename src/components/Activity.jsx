const data = [
    { id: 1, photo: 'OC', heading: 'New customer signup', client: 'Olivia Chen', info: 'olivia@example.com', detail: 'Pro-plan', timestamp: '2min ago', state: 'Completed'},
    { id: 2, photo: 'JD', heading: 'Payment received', client: 'John Doe', info: 'john@example.com', detail: 'Enterprise', timestamp: '15min ago', state: 'Paid'},
    { id: 3, photo: 'SK', heading: 'Subscription renewed', client: 'Sarah Kim', info: 'sarah@example.com', detail: 'Basic', timestamp: '1h ago', state: 'Renewed'},
    { id: 4, photo: 'MP', heading: 'New customer signup', client: 'Mike Park', info: 'mike@example.com', detail: 'Pro-plan', timestamp: '2h ago', state: 'Completed'},
];

function getStateColor(state) {
  if (state === 'Completed') return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
  if (state === 'Paid') return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
  return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
}

export default function Activity(){
    return(
        <div className="bg-emerald-300/50 border border-white/5 w-full rounded-xl p-5 mt-5">
            <header className="flex justify-between items-center mb-5">
              <h3 className="font-semibold text-[14px]">Recent Activity</h3>
              <span className="text-[11px] text-white/40 cursor-pointer hover:text-white">View all</span>
            </header>

            <div className="space-y-4">
              {data.map((a) => (
                <div key={a.id} className="flex items-center justify-between gap-3">
                  {/* Left - Avatar + info */}
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[11px] font-medium flex-shrink-0">
                      {a.photo}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[12px] font-medium truncate">{a.heading}</p>
                      <p className="text-[11px] text-white/40 truncate">{a.client} • {a.detail}</p>
                    </div>
                  </div>

                  {/* Right - time + state */}
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border ${getStateColor(a.state)}`}>
                      {a.state}
                    </span>
                    <span className="text-[10px] text-white/30">{a.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
        </div>
    )
}