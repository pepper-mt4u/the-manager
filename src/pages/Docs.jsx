const sections = [
  {
    id: 'overview',
    title: 'Overview',
    content: [
      {
        q: 'What is The Manager?',
        a: 'The Manager is a yield optimisation protocol built on Robinhood Chain. It sits on top of The Index protocol and automatically converts the tokenized stock distributions that $INDEX holders earn into either more $INDEX or a single tokenized stock of your choice.',
      },
      {
        q: 'What is The Index?',
        a: 'The Index is a protocol on Robinhood Chain where holding $INDEX earns you tokenized stock distributions. A 3% ETH fee is collected on all $INDEX trades, used to purchase a basket of 18+ tokenized stocks, which are then airdropped to eligible $INDEX holders. Learn more at theindex.finance.',
      },
      {
        q: 'Who is The Manager for?',
        a: '$INDEX holders who want to actively manage their distributions instead of letting them sit idle. Whether you want to maximise your $INDEX position (compound vault) or concentrate into a conviction stock (e.g. all into SPCX), The Manager automates it.',
      },
    ],
  },
  {
    id: 'vaults',
    title: 'Vaults',
    content: [
      {
        q: 'How do vaults work?',
        a: 'You deposit your $INDEX into a vault. The Manager monitors The Index distribution cycle. When tokenized stocks are distributed, The Manager automatically swaps them into your chosen target asset using Uniswap v4 on Robinhood Chain. You receive the compounded asset; your $INDEX remains in the vault.',
      },
      {
        q: 'What vaults are available?',
        a: 'At launch: the INDEX Compound Vault (converts all to $INDEX) and several concentration vaults (SPCX, NVDA, AAPL, AMZN, GOOGL). More vaults will be added based on demand and available liquidity on Robinhood Chain.',
      },
      {
        q: 'Can I change vaults?',
        a: 'Yes. You can withdraw your $INDEX from one vault and deposit into another at any time. There is no lockup period.',
      },
      {
        q: 'What is the fee?',
        a: '1% of all yield converted through The Manager goes to the treasury for $INDEX buybacks and burns. There is no performance fee, no management fee, and no withdrawal fee.',
      },
    ],
  },
  {
    id: 'treasury',
    title: 'Treasury & Burns',
    content: [
      {
        q: 'What happens to the 1% fee?',
        a: 'It accumulates in the treasury. Periodically, the treasury uses these funds to buy $INDEX on the open market and burn them permanently (send to 0x000…dEaD). This creates continuous buy pressure and reduces supply.',
      },
      {
        q: 'Is the burn verifiable on-chain?',
        a: 'Yes. All buyback and burn transactions are executed on Robinhood Chain (Arbitrum Orbit) and are fully verifiable. The Treasury page lists every burn with the transaction hash.',
      },
    ],
  },
  {
    id: 'contracts',
    title: 'Smart Contracts',
    content: [
      {
        q: 'Where are the contracts deployed?',
        a: 'Contracts will be deployed on Robinhood Chain (an Arbitrum Orbit L2). Addresses will be published here once the protocol launches. The contracts are adapted from audited Beefy Finance vault contracts, adjusted for The Index distribution model.',
      },
      {
        q: 'Have the contracts been audited?',
        a: 'Audit is planned before mainnet launch. Details will be published here.',
      },
    ],
  },
]

export default function Docs() {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-gray-900 mb-3">Documentation</h1>
          <p className="text-gray-500 text-base leading-relaxed">
            Everything you need to understand The Manager protocol.
          </p>
        </div>

        <nav className="flex flex-wrap gap-3 mb-12">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-[10px] font-bold tracking-widest text-gray-500 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors"
            >
              {s.title.toUpperCase()}
            </a>
          ))}
        </nav>

        <div className="space-y-14">
          {sections.map((section) => (
            <div key={section.id} id={section.id}>
              <h2 className="text-xl font-black text-gray-900 mb-6 pb-3 border-b border-gray-100">
                {section.title}
              </h2>
              <div className="space-y-8">
                {section.content.map((item) => (
                  <div key={item.q}>
                    <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 hero-gradient rounded-2xl text-white">
          <h3 className="font-black text-lg mb-2">Have a question?</h3>
          <p className="text-white/80 text-sm mb-4">
            Reach out on X or follow for protocol updates.
          </p>
          <a
            href="https://x.com/TheManagerFi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-gray-900 text-xs font-bold tracking-widest px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-colors"
          >
            @TheManagerFi →
          </a>
        </div>
      </div>
    </div>
  )
}
