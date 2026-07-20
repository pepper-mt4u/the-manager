const vaults = [
  {
    ticker: 'INDEX',
    name: 'INDEX Vault',
    company: 'The Index',
    target: '+$INDEX',
    desc: 'All tokenized stock distributions are automatically swapped back into $INDEX, rapidly compounding rewards.',
    tag: 'COMPOUND',
    tagColor: 'bg-coral-100 text-coral-700',
    accent: 'border-coral-200',
  },
  {
    ticker: 'USDG',
    name: 'USDG Stable Vault',
    company: 'USD on Robinhood Chain',
    target: '+$USDG',
    desc: 'All tokenized stock distributions are automatically swapped into USDG, the native stablecoin of the Robinhood layer 2.',
    tag: 'EARN',
    tagColor: 'bg-green-50 text-green-700',
    accent: 'border-green-100',
  },
  {
    ticker: 'AAPL',
    name: 'Apple Vault',
    company: 'Apple Inc.',
    target: '+AAPL',
    desc: 'All tokenized stock distributions are automatically swapped into tokenized Apple stock on the Robinhood layer 2.',
    tag: 'CONCENTRATE',
    tagColor: 'bg-blue-50 text-blue-700',
    accent: 'border-gray-100',
  },
  {
    ticker: 'AMD',
    name: 'AMD Vault',
    company: 'AMD',
    target: '+AMD',
    desc: 'All tokenized stock distributions are automatically swapped into tokenized AMD stock on the Robinhood layer 2.',
    tag: 'CONCENTRATE',
    tagColor: 'bg-blue-50 text-blue-700',
    accent: 'border-gray-100',
  },
  {
    ticker: 'AMZN',
    name: 'Amazon Vault',
    company: 'Amazon',
    target: '+AMZN',
    desc: 'All tokenized stock distributions are automatically swapped into tokenized Amazon stock on the Robinhood layer 2.',
    tag: 'CONCENTRATE',
    tagColor: 'bg-blue-50 text-blue-700',
    accent: 'border-gray-100',
  },
  {
    ticker: 'BE',
    name: 'Bloom Energy Vault',
    company: 'Bloom Energy',
    target: '+BE',
    desc: 'All tokenized stock distributions are automatically swapped into tokenized Bloom Energy stock on the Robinhood layer 2.',
    tag: 'CONCENTRATE',
    tagColor: 'bg-blue-50 text-blue-700',
    accent: 'border-gray-100',
  },
  {
    ticker: 'COIN',
    name: 'Coinbase Vault',
    company: 'Coinbase',
    target: '+COIN',
    desc: 'All tokenized stock distributions are automatically swapped into tokenized Coinbase stock on the Robinhood layer 2.',
    tag: 'CONCENTRATE',
    tagColor: 'bg-blue-50 text-blue-700',
    accent: 'border-gray-100',
  },
  {
    ticker: 'CRWV',
    name: 'CoreWeave Vault',
    company: 'CoreWeave',
    target: '+CRWV',
    desc: 'All tokenized stock distributions are automatically swapped into tokenized CoreWeave stock on the Robinhood layer 2.',
    tag: 'CONCENTRATE',
    tagColor: 'bg-blue-50 text-blue-700',
    accent: 'border-gray-100',
  },
  {
    ticker: 'GOOGL',
    name: 'Alphabet Vault',
    company: 'Alphabet Class A',
    target: '+GOOGL',
    desc: 'All tokenized stock distributions are automatically swapped into tokenized Alphabet stock on the Robinhood layer 2.',
    tag: 'CONCENTRATE',
    tagColor: 'bg-blue-50 text-blue-700',
    accent: 'border-gray-100',
  },
  {
    ticker: 'INTC',
    name: 'Intel Vault',
    company: 'Intel',
    target: '+INTC',
    desc: 'All tokenized stock distributions are automatically swapped into tokenized Intel stock on the Robinhood layer 2.',
    tag: 'CONCENTRATE',
    tagColor: 'bg-blue-50 text-blue-700',
    accent: 'border-gray-100',
  },
  {
    ticker: 'META',
    name: 'Meta Vault',
    company: 'Meta Platforms',
    target: '+META',
    desc: 'All tokenized stock distributions are automatically swapped into tokenized Meta Platforms stock on the Robinhood layer 2.',
    tag: 'CONCENTRATE',
    tagColor: 'bg-blue-50 text-blue-700',
    accent: 'border-gray-100',
  },
  {
    ticker: 'MSFT',
    name: 'Microsoft Vault',
    company: 'Microsoft',
    target: '+MSFT',
    desc: 'All tokenized stock distributions are automatically swapped into tokenized Microsoft stock on the Robinhood layer 2.',
    tag: 'CONCENTRATE',
    tagColor: 'bg-blue-50 text-blue-700',
    accent: 'border-gray-100',
  },
  {
    ticker: 'MU',
    name: 'Micron Vault',
    company: 'Micron Technology',
    target: '+MU',
    desc: 'All tokenized stock distributions are automatically swapped into tokenized Micron Technology stock on the Robinhood layer 2.',
    tag: 'CONCENTRATE',
    tagColor: 'bg-blue-50 text-blue-700',
    accent: 'border-gray-100',
  },
  {
    ticker: 'NVDA',
    name: 'NVIDIA Vault',
    company: 'NVIDIA',
    target: '+NVDA',
    desc: 'All tokenized stock distributions are automatically swapped into tokenized NVIDIA stock on the Robinhood layer 2.',
    tag: 'CONCENTRATE',
    tagColor: 'bg-blue-50 text-blue-700',
    accent: 'border-gray-100',
  },
  {
    ticker: 'ORCL',
    name: 'Oracle Vault',
    company: 'Oracle',
    target: '+ORCL',
    desc: 'All tokenized stock distributions are automatically swapped into tokenized Oracle stock on the Robinhood layer 2.',
    tag: 'CONCENTRATE',
    tagColor: 'bg-blue-50 text-blue-700',
    accent: 'border-gray-100',
  },
  {
    ticker: 'PLTR',
    name: 'Palantir Vault',
    company: 'Palantir Technologies',
    target: '+PLTR',
    desc: 'All tokenized stock distributions are automatically swapped into tokenized Palantir Technologies stock on the Robinhood layer 2.',
    tag: 'CONCENTRATE',
    tagColor: 'bg-blue-50 text-blue-700',
    accent: 'border-gray-100',
  },
  {
    ticker: 'SNDK',
    name: 'Sandisk Vault',
    company: 'Sandisk Corporation',
    target: '+SNDK',
    desc: 'All tokenized stock distributions are automatically swapped into tokenized Sandisk stock on the Robinhood layer 2.',
    tag: 'CONCENTRATE',
    tagColor: 'bg-blue-50 text-blue-700',
    accent: 'border-gray-100',
  },
  {
    ticker: 'SPCX',
    name: 'SpaceX Vault',
    company: 'Space Exploration Technologies',
    target: '+SPCX',
    desc: 'All tokenized stock distributions are automatically swapped into tokenized SpaceX stock on the Robinhood layer 2.',
    tag: 'CONCENTRATE',
    tagColor: 'bg-blue-50 text-blue-700',
    accent: 'border-gray-100',
  },
  {
    ticker: 'TSLA',
    name: 'Tesla Vault',
    company: 'Tesla',
    target: '+TSLA',
    desc: 'All tokenized stock distributions are automatically swapped into tokenized Tesla stock on the Robinhood layer 2.',
    tag: 'CONCENTRATE',
    tagColor: 'bg-blue-50 text-blue-700',
    accent: 'border-gray-100',
  },
  {
    ticker: 'USAR',
    name: 'USA Rare Earth Vault',
    company: 'USA Rare Earth',
    target: '+USAR',
    desc: 'All tokenized stock distributions are automatically swapped into tokenized USA Rare Earth stock on the Robinhood layer 2.',
    tag: 'CONCENTRATE',
    tagColor: 'bg-blue-50 text-blue-700',
    accent: 'border-gray-100',
  },
]

export default function Vaults() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900 mb-3">Vaults</h1>
          <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
            Deposit $INDEX tokens and decide where your tokenized stock distributions go. Vaults will automatically convert your rewards into the token of your choosing every 24 hours.
          </p>
        </div>

        <div className="p-5 bg-coral-50 rounded-2xl border border-coral-100 mb-8">
          <p className="text-sm text-coral-800 font-medium leading-relaxed">
            <strong>How vaults work:</strong> Deposit your $INDEX tokens. The Manager protocol monitors the tokenized stocks distributed to $INDEX holders by The Index protocol. When tokenized stocks are received by the vault you deposited your $INDEX tokens to, the vault automatically swaps these tokenized stocks into the asset you chose (e.g. into USDG for the USDG Vault) every 24 hours. The Manager takes a 2% fee from each automatic swap. <strong>Note: you must deposit a minimum of 10,000 $INDEX to receive tokenized stock distributions from The Index protocol.</strong>
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-5 mb-10 flex flex-wrap gap-6">
          {[
            { label: 'TOTAL VALUE LOCKED', value: '$0' },
            { label: 'ACTIVE VAULTS', value: '20' },
            { label: 'COMPOUNDING CYCLES', value: '0' },
          ].map((stat) => (
            <div key={stat.label} className="flex-1 min-w-[120px]">
              <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-1">{stat.label}</p>
              <p className="text-2xl font-black text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {vaults.map((v) => (
            <div key={v.ticker} className={`border-2 rounded-2xl p-6 hover:shadow-md transition-shadow ${v.accent} bg-white`}>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full ${v.tagColor}`}>
                  {v.tag}
                </span>
                <span className="text-[10px] font-bold tracking-widest text-gray-300">{v.ticker}</span>
              </div>
              <h3 className="font-black text-gray-900 text-base mb-0.5 leading-snug">{v.name}</h3>
              <p className="text-[11px] text-gray-400 mb-1">{v.company}</p>
              <p className="text-xs font-bold mb-4 tracking-wide" style={{ color: '#22c55e' }}>{v.target}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{v.desc}</p>

              <div className="border-t border-gray-100 pt-4 mb-5">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-gray-400">TVL</span>
                  <span className="font-bold text-gray-700">TBA</span>
                </div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-gray-400">APY</span>
                  <span className="font-bold text-gray-700">TBA</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Compounds</span>
                  <span className="font-bold text-gray-700">Daily at 00:00 UTC</span>
                </div>
              </div>

              <button
                className="w-full bg-gray-900 text-white text-xs font-bold tracking-widest py-3 rounded-xl hover:bg-gray-700 transition-colors"
                onClick={() => alert('Connect your wallet to enter a vault. Smart contracts coming soon.')}
              >
                CONNECT WALLET
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
