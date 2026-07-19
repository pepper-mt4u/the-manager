import { Link } from 'react-router-dom'

function ManagerLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="13" height="13" rx="2" fill="#4A7BC4" />
      <rect x="15" y="0" width="13" height="13" rx="2" fill="#E8E8E8" />
      <rect x="0" y="15" width="13" height="13" rx="2" fill="#E8E8E8" />
      <rect x="15" y="15" width="13" height="13" rx="2" fill="#4A7BC4" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <ManagerLogo />
          <span className="font-bold text-sm tracking-widest text-gray-900 uppercase">The Manager</span>
        </div>

        <div className="flex items-center gap-5 text-xs font-semibold tracking-widest text-gray-400">
          <Link to="/vaults" className="hover:text-gray-700 transition-colors">VAULTS</Link>
          <Link to="/portfolio" className="hover:text-gray-700 transition-colors">PORTFOLIO</Link>
          <Link to="/index-reserve" className="hover:text-gray-700 transition-colors">INDEX RESERVE</Link>
          <Link to="/docs" className="hover:text-gray-700 transition-colors">DOCS</Link>
          <a
            href="https://x.com/TheManagerFi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-700 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>

        <p className="text-xs text-gray-400">
          Built on{' '}
          <a href="https://robinhood.com/robinhood-chain" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors underline underline-offset-2">
            Robinhood Chain
          </a>
          {' '}· Powered by{' '}
          <a href="https://theindex.finance" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors underline underline-offset-2">
            The Index
          </a>
        </p>
      </div>
    </footer>
  )
}
