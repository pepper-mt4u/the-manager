const burnHistory = []

export default function Treasury() {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-gray-900 mb-3">Treasury</h1>
          <p className="text-gray-500 text-base max-w-xl leading-relaxed">
            1% of every vault conversion is used to buy $INDEX on the open market and burn it permanently. The Manager creates buy pressure and reduces supply with every cycle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {[
            { label: 'TOTAL INDEX BURNED', value: '0', sub: '$INDEX' },
            { label: 'USD VALUE BURNED', value: '$0', sub: 'All time' },
            { label: 'BUYBACK CYCLES', value: '0', sub: 'Completed' },
            { label: 'PROTOCOL FEE', value: '1%', sub: 'Of conversions' },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-50 rounded-2xl p-6">
              <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-2">{stat.label}</p>
              <p className="text-3xl font-black text-gray-900 mb-1">{stat.value}</p>
              <p className="text-xs text-gray-400">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-gray-900">Buyback & Burn History</h2>
            <span className="text-[10px] font-bold tracking-widest text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
              ON-CHAIN
            </span>
          </div>

          {burnHistory.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <p className="text-gray-400 text-sm font-medium">No burns recorded yet.</p>
              <p className="text-gray-300 text-xs mt-1">The first burn will appear here after the protocol launches.</p>
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase border-b border-gray-100">
                  <th className="text-left px-6 py-3">Date</th>
                  <th className="text-left px-6 py-3">INDEX Burned</th>
                  <th className="text-left px-6 py-3">USD Value</th>
                  <th className="text-left px-6 py-3">Tx</th>
                </tr>
              </thead>
              <tbody>
                {burnHistory.map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-600">{row.date}</td>
                    <td className="px-6 py-4 font-bold text-gray-900">{row.amount}</td>
                    <td className="px-6 py-4 text-gray-600">{row.usd}</td>
                    <td className="px-6 py-4">
                      <a href={row.tx} className="text-coral-600 hover:underline font-mono text-xs">
                        {row.tx.slice(0, 10)}…
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
          <h3 className="font-bold text-gray-900 mb-3">How the buyback works</h3>
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>
              <strong className="text-gray-800">Step 1:</strong> When a vault converts distributions, 1% of the gross value is withheld as a protocol fee.
            </p>
            <p>
              <strong className="text-gray-800">Step 2:</strong> The treasury accumulates these fees and periodically uses them to purchase $INDEX tokens on the open market via Uniswap v4 on Robinhood Chain.
            </p>
            <p>
              <strong className="text-gray-800">Step 3:</strong> Purchased tokens are sent to the burn address (0x000…dEaD), permanently removing them from supply.
            </p>
            <p>
              <strong className="text-gray-800">Result:</strong> The more users compound via The Manager, the more $INDEX is burned. Every user benefits as supply contracts.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
