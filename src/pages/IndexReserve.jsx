const reserveHistory = []

export default function IndexReserve() {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-gray-900 mb-3">INDEX Reserve</h1>
          <p className="text-gray-500 text-base max-w-xl leading-relaxed">
            2% of every vault conversion is allocated to the INDEX Reserve. The protocol accumulates $INDEX over time, creating a growing treasury owned by the protocol.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {[
            { label: 'TOTAL INDEX HELD', value: '0', sub: '$INDEX in reserve' },
            { label: 'USD VALUE', value: '$0', sub: 'At current price' },
            { label: 'RESERVE CYCLES', value: '0', sub: 'Completed' },
            { label: 'PROTOCOL FEE', value: '2%', sub: 'Of all conversions' },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-50 rounded-2xl p-6">
              <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-2">{stat.label}</p>
              <p className="text-3xl font-black text-gray-900 mb-1">{stat.value}</p>
              <p className="text-xs text-gray-400">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-gray-900">Reserve Accumulation History</h2>
            <span className="text-[10px] font-bold tracking-widest text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
              ON-CHAIN
            </span>
          </div>

          {reserveHistory.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <p className="text-gray-400 text-sm font-medium">No reserve accumulation recorded yet.</p>
              <p className="text-gray-300 text-xs mt-1">Entries will appear here once the protocol is live and vaults begin converting.</p>
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase border-b border-gray-100">
                  <th className="text-left px-6 py-3">Date</th>
                  <th className="text-left px-6 py-3">INDEX Added</th>
                  <th className="text-left px-6 py-3">USD Value</th>
                  <th className="text-left px-6 py-3">Reserve Total</th>
                  <th className="text-left px-6 py-3">Tx</th>
                </tr>
              </thead>
              <tbody>
                {reserveHistory.map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-600">{row.date}</td>
                    <td className="px-6 py-4 font-bold text-gray-900">{row.amount}</td>
                    <td className="px-6 py-4 text-gray-600">{row.usd}</td>
                    <td className="px-6 py-4 font-bold text-coral-600">{row.total}</td>
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

        <div className="p-6 bg-gray-50 rounded-2xl">
          <h3 className="font-bold text-gray-900 mb-3">How the INDEX Reserve works</h3>
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>
              <strong className="text-gray-800">Step 1:</strong> When a vault converts distributions, 2% of the gross value is withheld as a protocol fee.
            </p>
            <p>
              <strong className="text-gray-800">Step 2:</strong> The fee is used to purchase $INDEX on the open market via Uniswap v4 on Robinhood Chain.
            </p>
            <p>
              <strong className="text-gray-800">Step 3:</strong> Purchased $INDEX is held in the INDEX Reserve contract, accumulating over time as vaults compound.
            </p>
            <p>
              <strong className="text-gray-800">Purpose:</strong> The reserve acts as the protocol's balance sheet, providing long-term stability and a growing $INDEX position owned by the protocol itself.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
