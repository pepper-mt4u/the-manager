import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const stocks = [
  { ticker: 'NVDA', name: 'NVIDIA',    amount: '+$9.34',  color: '#76b900' },
  { ticker: 'AAPL', name: 'Apple',     amount: '+$8.21',  color: '#555555' },
  { ticker: 'MSFT', name: 'Microsoft', amount: '+$7.52',  color: '#00a4ef' },
  { ticker: 'AMZN', name: 'Amazon',    amount: '+$4.82',  color: '#ff9900' },
  { ticker: 'GOOGL', name: 'Alphabet', amount: '+$4.75',  color: '#4285f4' },
  { ticker: 'SPCX', name: 'SpaceX',   amount: '+$3.93',  color: '#005288' },
]

const GREEN = '#22c55e'
const NVDA_GREEN = '#76b900'

function HeroCard() {
  const [mode, setMode] = useState('compound')
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setMode(m => m === 'compound' ? 'concentrate' : 'compound')
        setVisible(true)
      }, 450)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const isCompound   = mode === 'compound'
  const target       = isCompound ? 'INDEX' : 'NVDA'
  const targetColor  = isCompound ? GREEN : NVDA_GREEN
  const label        = isCompound ? 'Auto-Compounding' : 'Auto-Concentrating'
  const totalLabel   = isCompound ? 'TOTAL COMPOUNDED' : 'TOTAL CONCENTRATED'
  const accumLabel   = isCompound ? 'INDEX Accumulated' : 'NVDA Accumulated'
  const accumValue   = isCompound ? '1,247 INDEX' : '0.38 NVDA'

  return (
    <div className="bg-white rounded-3xl card-shadow overflow-hidden w-full lg:w-[480px]">
      <div className="px-7 py-5 border-b border-gray-100 flex items-center gap-3">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="0" y="0" width="13" height="13" rx="2" fill="#4A7BC4" />
          <rect x="15" y="0" width="13" height="13" rx="2" fill="#d0d0d0" />
          <rect x="0" y="15" width="13" height="13" rx="2" fill="#d0d0d0" />
          <rect x="15" y="15" width="13" height="13" rx="2" fill="#4A7BC4" />
        </svg>
        <span className="text-base font-bold tracking-widest text-gray-800 uppercase">The Manager</span>
      </div>

      <div className="px-7 pt-5 pb-2" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.35s ease' }}>
        <p className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase mb-1">{label}</p>
        <p className="text-xs text-gray-400 mb-4">
          All distributions →{' '}
          <span className="font-bold" style={{ color: targetColor }}>${target}</span>
        </p>
        <div className="space-y-3">
          {stocks.map((s) => (
            <div key={s.ticker} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: s.color }}
                >
                  {s.ticker[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 leading-tight">{s.name}</p>
                  <p className="text-xs text-gray-400">{s.ticker}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-gray-900">{s.amount}</p>
                <p className="text-xs font-semibold" style={{ color: targetColor }}>→ {target}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-7 my-4 p-4 bg-gray-50 rounded-2xl" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.35s ease' }}>
        <div className="flex justify-between items-center">
          <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase">{totalLabel}</p>
          <p className="text-base font-bold text-gray-900">$38.57</p>
        </div>
        <div className="flex justify-between items-center mt-1">
          <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase">{accumLabel}</p>
          <p className="text-sm font-bold" style={{ color: GREEN }}>{accumValue}</p>
        </div>
      </div>
    </div>
  )
}

const processSteps = [
  {
    n: '01',
    title: 'Buy $INDEX on the Robinhood Chain',
    body: 'The Index protocol distributes (airdrops) tokenized stocks to wallets holding at least 10,000 $INDEX every 15 minutes.',
    tag: 'THE INDEX',
  },
  {
    n: '02',
    title: 'Deposit $INDEX into a Manager Vault',
    body: 'Choose your strategy: compound into $INDEX or concentrate into a single stock. 10,000 $INDEX minimum.',
    tag: 'VAULTS',
  },
  {
    n: '03',
    title: 'When tokenized stock distributions arrive,',
    body: 'The Manager automatically converts all of your received tokenized stocks into your chosen target asset.',
    tag: 'AUTO-COMPOUND',
  },
  {
    n: '04',
    title: '$INDEX Protocol Reserve',
    body: null,
    tag: 'INDEX RESERVE',
  },
]

const vaultPreviews = [
  {
    name: 'INDEX Vault',
    target: '+$INDEX',
    desc: 'All tokenized stock distributions are automatically swapped back into $INDEX, rapidly compounding rewards.',
    apy: 'TBA',
    tvl: '$0',
    tag: 'COMPOUND',
    tagColor: 'bg-coral-100 text-coral-700',
  },
  {
    name: 'SpaceX Vault',
    target: '+SPCX',
    desc: 'All tokenized stock distributions are automatically swapped into tokenized SpaceX stock on the Robinhood layer 2.',
    apy: 'TBA',
    tvl: '$0',
    tag: 'AUTO-SWAPPED',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'NVIDIA Vault',
    target: '+NVDA',
    desc: 'All tokenized stock distributions are automatically swapped into tokenized NVIDIA stock on the Robinhood layer 2.',
    apy: 'TBA',
    tvl: '$0',
    tag: 'AUTO-SWAPPED',
    tagColor: 'bg-blue-100 text-blue-700',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient min-h-screen pt-28 pb-16 px-5 flex items-center overflow-x-hidden">
        <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          <div className="flex-1 text-white">
            <h1
              className="text-3xl sm:text-4xl lg:text-[56px] font-normal tracking-tight mb-5 max-w-xl"
              style={{ lineHeight: 1.22 }}
            >
              Decide where your distributions go.<br />Compound your INDEX holdings.
            </h1>
            <p className="text-white/80 text-base sm:text-lg mb-5 sm:mb-10 max-w-md leading-relaxed">
              2% of all converted yield goes towards the INDEX Reserve.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/vaults"
                className="bg-white text-gray-900 font-bold text-sm tracking-wider px-6 py-3.5 rounded-xl hover:bg-gray-100 transition-colors"
              >
                SEE VAULTS
              </Link>
              <a
                href="https://theindex.finance/#/swap"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 font-bold text-sm tracking-wider px-6 py-3.5 rounded-xl hover:bg-gray-100 transition-colors"
              >
                BUY $INDEX →
              </a>
            </div>
          </div>

          <div className="w-full lg:flex-shrink-0 lg:w-auto card-entrance">
            <HeroCard />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 lg:py-24 px-5 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-2">How The Manager Works</h2>
          <p className="text-gray-500 mb-12 text-sm">A yield layer built on top of The Index protocol.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {processSteps.map((step) => (
              <div key={step.n} className="bg-white rounded-2xl p-7 border border-gray-100">
                <span className="text-3xl font-black text-gray-200 block mb-3">{step.n}</span>
                <h3 className="font-bold text-gray-900 text-base mb-2">{step.title}</h3>
                {step.body && (
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{step.body}</p>
                )}
                <span className="inline-block text-[10px] font-bold tracking-widest text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {step.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vaults preview */}
      <section className="py-12 lg:py-24 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">Choose Your Strategy</h2>
              <p className="text-gray-500 text-sm">Deposit once. The Manager handles the rest.</p>
            </div>
            <Link to="/vaults" className="text-xs font-bold tracking-widest text-coral-600 hover:text-coral-700 transition-colors">
              ALL VAULTS →
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {vaultPreviews.map((v) => (
              <div key={v.name} className="border border-gray-100 rounded-2xl p-6 hover:border-green-200 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full ${v.tagColor}`}>
                    {v.tag}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-1">{v.name}</h3>
                <p className="text-[11px] font-bold mb-3 tracking-wide" style={{ color: GREEN }}>{v.target}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{v.desc}</p>
                <div className="flex justify-between text-xs text-gray-400 border-t border-gray-100 pt-4">
                  <span>TVL <strong className="text-gray-700">{v.tvl}</strong></span>
                  <span>APY <strong className="text-gray-700">{v.apy}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-10 lg:py-20 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="hero-gradient rounded-3xl px-10 py-14 text-center text-white">
            <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
              Stop leaving yield on the table.
            </h2>
            <p className="text-white/80 text-base mb-8 max-w-md mx-auto">
              The Manager turns passive distributions into an active compounding engine.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/vaults"
                className="bg-white text-gray-900 font-bold text-sm tracking-wider px-7 py-3.5 rounded-xl hover:bg-gray-100 transition-colors"
              >
                GO TO VAULTS →
              </Link>
              <Link
                to="/docs"
                className="border border-white/50 text-white font-bold text-sm tracking-wider px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
              >
                READ THE DOCS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
