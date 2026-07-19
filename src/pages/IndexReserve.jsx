const reserveHistory = []

export default function IndexReserve() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900 mb-3">INDEX Reserve</h1>
          <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
            2% of all vault conversions are allocated to the INDEX reserve. The Manager accumulates INDEX over time to align incentives with The Index.
          </p>
        </div>

        <div className="p-5 bg-coral-50 rounded-2xl border border-coral-100 mb-8">
          <h3 className="font-bold text-coral-900 mb-3 text-sm">How the INDEX Reserve works</h3>
          <div className="space-y-2 text-sm text-coral-800 leading-relaxed">
            <p>
              <strong>Step 1:</strong> When a vault converts tokenized stock distributions to another token, 2% of the gross value is withheld as a protocol fee.
            </p>
            <p>
              <strong>Step 2:</strong> This protocol fee is used to buy $INDEX via Rialto.
            </p>
            <p>
              <strong>Step 3:</strong> Purchased $INDEX is held in the INDEX Reserve contract, accumulating over time as vaults compound, and aligns The Manager protocol's economics with The Index protocol.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {[
            { label: 'TOTAL INDEX HELD', value: '0', sub: '$INDEX in reserve' },
            { label: 'USD VALUE OF DISTRIBUTIONS', value: '$0', sub: 'Includes tokenized stock earnings' },
            { label: 'PROTOCOL FEE', value: '2%', sub: 'Of all vault conversions' },
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

      </div>
    </div>
  )
}
