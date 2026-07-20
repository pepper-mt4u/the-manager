const sections = [
  {
    id: 'overview',
    title: 'Overview',
    content: [
      {
        q: 'What is The Manager?',
        a: 'The Manager is a yield optimization protocol built on the Robinhood Chain. It optimizes the tokenized stocks rewards that are distributed (airdropped) by The Index protocol to wallets holding at least 10,000 $INDEX tokens.',
      },
      {
        q: 'What is The Index?',
        a: 'The Index is a tokenized stock dividend protocol on the Robinhood Chain. It takes a 3% ETH fee from all $INDEX trades and uses this ETH to buy a basket of tokenized stocks which are then distributed to wallets holding at least 10,000 $INDEX.',
      },
      {
        q: 'Who is The Manager for?',
        a: 'The Manager is primarily for $INDEX holders who want to either compound their $INDEX holdings or automatically convert their tokenized stock distributions into other stocks or stablecoins (specifically USDG).',
      },
    ],
  },
  {
    id: 'vaults',
    title: 'Vaults',
    content: [
      {
        q: 'How do vaults work?',
        a: 'Deposit a minimum of 10,000 $INDEX tokens into a vault. Every 24 hours, The Manager protocol automatically swaps the tokenized stocks distributed to the vault by The Index protocol into the asset the vault is for (e.g. into SPCX).',
      },
      {
        q: 'What vaults are available?',
        a: 'At launch, vaults will support the INDEX token, the USDG stablecoin, and all tokenized stocks supported by The Index. More vaults will be added in the future.',
      },
      {
        q: 'Can I change vaults?',
        a: 'Yes. You can withdraw your $INDEX tokens from a vault at any time and deposit into a different vault. There is no lock up period.',
      },
      {
        q: 'What is the fee?',
        a: 'The Manager protocol takes 2% of all tokenized stock distributions to vaults as a fee.',
      },
    ],
  },
  {
    id: 'index-reserve',
    title: 'INDEX Reserve',
    content: [
      {
        q: 'What happens to the 2% fee?',
        a: 'The Manager protocol purchases INDEX tokens using the 2% fee.',
      },
      {
        q: 'Is the reserve verifiable on-chain?',
        a: 'Yes. All INDEX tokens and tokenized stocks held by The Manager protocol reserve can be seen on The Reserve page.',
      },
    ],
  },
  {
    id: 'contracts',
    title: 'Smart Contracts',
    content: [
      {
        q: 'Where are the contracts deployed?',
        a: 'All smart contracts are deployed on the Robinhood Chain. All relevant addresses will be published here once The Manager protocol has fully launched.',
      },
      {
        q: 'Have the contracts been audited?',
        a: 'The smart contracts have not been formally audited, but they were written and/or compiled by a former blockchain security researcher (by someone who used to audit blockchain smart contracts for a living).',
      },
    ],
  },
]

export default function Docs() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6">
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
