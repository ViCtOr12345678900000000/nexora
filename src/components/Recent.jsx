const activities = [
  { name: "New customer signup", detail: "olivia.chen@example.com • Pro Plan • 2 min ago", status: "Completed", icon: "OC", color: "bg-orange-300" },
  { name: "Payment received", detail: "$2,400 • Invoice #12849 • 14 min ago", status: "Paid", icon: "AI", color: "bg-blue-400" },
  { name: "Subscription renewed", detail: "Horizon Co. $899 • Annual renewal • 1 hour ago", status: "Renewed", icon: "HC", color: "bg-purple-400" },
  { name: "Support ticket resolved", detail: "Login issue for user • 3 hours ago", status: "Resolved", icon: "🎧", color: "bg-[#2a2a30]" },
]

export default function Recent(){
  return(
    <div className="bg-[#1a1a20] border border-white/5 rounded-xl p-5">
      <h3 className="font-bold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map(a => (
          <div key={a.name} className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
              <div className={`w-8 h-8 rounded-full ${a.color} text-black text- font-bold grid place-items-center`}>{a.icon}</div>
              <div>
                <p className="text- font-medium leading-none">{a.name}</p>
                <p className="text- text-white/40 mt-1">{a.detail}</p>
              </div>
            </div>
            <span className="text- px-2 py-1 rounded-full bg-[#1e2d2d] text-emerald-400 border border-emerald-500/20">{a.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}