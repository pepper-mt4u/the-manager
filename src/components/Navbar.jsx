import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'

function ManagerLogo() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
      <rect x="0" y="0" width="13" height="13" rx="2" fill="#4A7BC4" />
      <rect x="15" y="0" width="13" height="13" rx="2" fill="#E8E8E8" />
      <rect x="0" y="15" width="13" height="13" rx="2" fill="#E8E8E8" />
      <rect x="15" y="15" width="13" height="13" rx="2" fill="#4A7BC4" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function Countdown() {
  const [display, setDisplay] = useState('--:--:--')

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const nextMidnight = new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate() + 1,
        0, 0, 0, 0
      ))
      const diff = Math.max(0, nextMidnight - now)
      const h = Math.floor(diff / 3600000)
      const m = Math.floor((diff % 3600000) / 60000)
      const s = Math.floor((diff % 60000) / 1000)
      setDisplay(
        `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return display
}

const navLinks = [
  { label: 'HOME', path: '/' },
  { label: 'VAULTS', path: '/vaults' },
  { label: 'PORTFOLIO', path: '/portfolio' },
  { label: 'INDEX RESERVE', path: '/index-reserve' },
  { label: 'DOCS', path: '/docs' },
]

export default function Navbar() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path
  const [collapsed, setCollapsed] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      if (currentY > lastScrollY.current && currentY > 80) {
        setCollapsed(true)
      } else if (currentY < lastScrollY.current) {
        setCollapsed(false)
      }
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
        /* width transitions between a fixed px (collapsed) and a calc (expanded) */
        width: collapsed ? '180px' : 'calc(100% - 1.5rem)',
        maxWidth: collapsed ? '180px' : '1188px',
        transition: 'width 0.55s cubic-bezier(0.22, 1, 0.36, 1), max-width 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 6px rgba(0,0,0,0.07)',
          borderRadius: '14px',
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'space-between',
          overflow: 'hidden',
          transition: 'justify-content 0s',
        }}
      >
        {/* Logo — always visible */}
        <Link
          to="/"
          style={{ display: 'flex', alignItems: 'center', gap: '9px', flexShrink: 0, textDecoration: 'none' }}
        >
          <ManagerLogo />
          <span style={{ fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', color: '#111827', textTransform: 'uppercase' }}>
            Manager
          </span>
        </Link>

        {/* Centre links */}
        <div
          className="hidden md:flex items-center gap-6"
          style={{
            opacity: collapsed ? 0 : 1,
            maxWidth: collapsed ? 0 : '700px',
            overflow: 'hidden',
            transition: 'opacity 0.25s ease, max-width 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
            pointerEvents: collapsed ? 'none' : 'auto',
          }}
        >
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              style={{
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                whiteSpace: 'nowrap',
                color: isActive(path) ? '#111827' : '#9ca3af',
                textDecoration: 'none',
              }}
              onMouseEnter={e => { if (!isActive(path)) e.target.style.color = '#374151' }}
              onMouseLeave={e => { if (!isActive(path)) e.target.style.color = '#9ca3af' }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right controls */}
        <div
          className="flex items-center"
          style={{
            gap: '10px',
            opacity: collapsed ? 0 : 1,
            maxWidth: collapsed ? 0 : '420px',
            overflow: 'hidden',
            transition: 'opacity 0.25s ease, max-width 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
            pointerEvents: collapsed ? 'none' : 'auto',
            flexShrink: 0,
          }}
        >
          <div style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            border: '1px solid #e5e7eb', borderRadius: '8px',
            padding: '5px 10px', whiteSpace: 'nowrap',
          }}>
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#6b7280' }}>Next Conversion:</span>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#111827', fontFamily: 'monospace' }}>
              <Countdown />
            </span>
          </div>

          <button
            style={{
              backgroundColor: '#111827', color: 'white',
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
              padding: '7px 16px', borderRadius: '8px', border: 'none',
              cursor: 'pointer', whiteSpace: 'nowrap',
            }}
            onClick={() => alert('Wallet connection coming soon.')}
          >
            CONNECT
          </button>

          <a
            href="https://x.com/TheManagerFi"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#9ca3af', display: 'flex', alignItems: 'center' }}
          >
            <XIcon />
          </a>
        </div>
      </div>
    </nav>
  )
}
