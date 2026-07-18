const mockPositions = [
  { vault: 'INDEX Compound Vault', target: '$INDEX', deposited: '10,000', value: '$—', compounded: '$—', since: '—' },
  { vault: 'SpaceX Vault', target: '$SPCX', deposited: '5,000', value: '$—', compounded: '$—', since: '—' },
]

const mockHistory = [
  { date: '—', vault: 'INDEX Compound Vault', received: '—', converted: '—', output: '—' },
  { date: '—', vault: 'SpaceX Vault', received: '—', converted: '—', output: '—' },
]

function ConnectPrompt() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-6">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="0" y="0" width="13" height="13" rx="2" fill="#4A7BC4" />
          <rect x="15" y="0" width="13" height="13" rx="2" fill="#d0d0d0" />
          <rect x="0" y="15" width="13" height="13" rx="2" fill="#d0d0d0" />
          <rect x="15" y="15" width="13" height="13" rx="2" fill="#4A7BC4" />
        </svg>
      </div>
      <h2 className="text-2xl font-black text-gray-900 mb-3">Connect your wallet</h2>
      <p className="text-gray-500 text-sm max-w-sm leading-relaxed mb-8">
        Connect your wallet to view your active vault positions, compounding history, and total yield earned.
      </p>
      <button
        className="bg-gray-900 text-white text-xs font-bold tracking-widest px-8 py-3.5 rounded-xl hover:bg-gray-700 transition-colors"
        onClick={() => alert('Wallet connection coming soon.')}
      >
        CONNECT WALLET
      </button>

      <div className="mt-20 w-full max-w-4xl">
        <p className="text-[10px] font-semibold tracking-widest text-gray-300 uppercase mb-6 text-left">
          Preview — what you will see once connected
        </p>

        <div className="opacity-40 pointer-events-none space-y-6">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'TOTAL DEPOSITED', value: '$0.00' },
              { label: 'TOTAL COMPOUNDED', value: '$0.00' },
              { label: 'ACTIVE VAULTS', value: '0' },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 rounded-2xl p-5">
                <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-2">{s.label}</p>
                <p className="text-2xl font-black text-gray-900">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h3 className="font-bold text-gray-900">Your Positions</h3>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase border-b border-gray-100">
                  <th className="text-left px-6 py-3">Vault</th>
                  <th className="text-left px-6 py-3">Target</th>
                  <th className="text-left px-6 py-3">$INDEX Deposited</th>
                  <th className="text-left px-6 py-3">Current Value</th>
                  <th className="text-left px-6 py-3">Compounded</th>
                  <th className="text-left px-6 py-3">Since</th>
                </tr>
              </thead>
              <tbody>
                {mockPositions.map((p, i) => (
                  <tr key={i} className="border-b border-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">{p.vault}</td>
                    <td className="px-6 py-4 font-bold text-coral-600">{p.target}</td>
                    <td className="px-6 py-4 text-gray-600">{p.deposited}</td>
                    <td className="px-6 py-4 text-gray-600">{p.value}</td>
                    <td className="px-6 py-4 text-gray-600">{p.compounded}</td>
                    <td className="px-6 py-4 text-gray-400">{p.since}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h3 className="font-bold text-gray-900">Compounding History</h3>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase border-b border-gray-100">
                  <th className="text-left px-6 py-3">Date</th>
                  <th className="text-left px-6 py-3">Vault</th>
                  <th className="text-left px-6 py-3">Stocks Received</th>
                  <th className="text-left px-6 py-3">Converted From</th>
                  <th className="text-left px-6 py-3">Output</th>
                </tr>
              </thead>
              <tbody>
                {mockHistory.map((h, i) => (
                  <tr key={i} className="border-b border-gray-50">
                    <td className="px-6 py-4 text-gray-400">{h.date}</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">{h.vault}</td>
                    <td className="px-6 py-4 text-gray-600">{h.received}</td>
                    <td className="px-6 py-4 text-gray-600">{h.converted}</td>
                    <td className="px-6 py-4 font-bold text-coral-600">{h.output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-gray-900 mb-3">Portfolio</h1>
          <p className="text-gray-500 text-base max-w-xl leading-relaxed">
            Track your vault positions, compounding history, and total yield earned across all Manager vaults.
          </p>
        </div>
        <ConnectPrompt />
      </div>
    </div>
  )
}
