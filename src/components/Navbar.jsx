import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'

function ManagerLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
      <rect x="0" y="0" width="13" height="13" rx="2" fill="#4A7BC4" />
      <rect x="15" y="0" width="13" height="13" rx="2" fill="#E8E8E8" />
      <rect x="0" y="15" width="13" height="13" rx="2" fill="#E8E8E8" />
      <rect x="15" y="15" width="13" height="13" rx="2" fill="#4A7BC4" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
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
  { label: 'Home', path: '/' },
  { label: 'Vaults', path: '/vaults' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Index Reserve', path: '/index-reserve' },
  { label: 'Docs', path: '/docs' },
]

export default function Navbar() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path
  const [collapsed, setCollapsed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      // Only collapse on desktop
      if (window.innerWidth < 1024) {
        lastScrollY.current = currentY
        return
      }
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

  // Close mobile menu on route change
  useEffect(() => { setMobileMenuOpen(false) }, [location.pathname])

  return (
    <nav
      style={{
        position: 'fixed',
        top: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
        width: collapsed ? '180px' : 'calc(100% - 1.5rem)',
        maxWidth: collapsed ? '180px' : '1188px',
        transition: 'width 0.55s cubic-bezier(0.22, 1, 0.36, 1), max-width 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* Main pill */}
      <div
        style={{
          backgroundColor: 'white',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 6px rgba(0,0,0,0.07)',
          borderRadius: '14px',
          padding: '11px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'space-between',
          overflow: 'hidden',
          gap: '8px',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '7px', flexShrink: 0, textDecoration: 'none' }}>
          <ManagerLogo />
          <span style={{ fontWeight: 700, fontSize: '11px', letterSpacing: '0.10em', color: '#111827', textTransform: 'uppercase' }}>
            Manager
          </span>
        </Link>

        {/* Desktop centre links */}
        <div
          className="hidden lg:flex items-center gap-6"
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
                fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em',
                whiteSpace: 'nowrap', color: isActive(path) ? '#111827' : '#9ca3af',
                textDecoration: 'none',
              }}
              onMouseEnter={e => { if (!isActive(path)) e.target.style.color = '#374151' }}
              onMouseLeave={e => { if (!isActive(path)) e.target.style.color = '#9ca3af' }}
            >
              {label.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* Desktop countdown — sits between nav links and right controls */}
        <div
          className="hidden lg:flex items-center gap-1.5"
          style={{
            opacity: collapsed ? 0 : 1,
            maxWidth: collapsed ? 0 : '280px',
            overflow: 'hidden',
            transition: 'opacity 0.25s ease, max-width 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
            pointerEvents: collapsed ? 'none' : 'auto',
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', color: '#9ca3af', whiteSpace: 'nowrap' }}>NEXT CONVERSION:</span>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#111827', fontFamily: 'monospace' }}>
            <Countdown />
          </span>
        </div>

        {/* Right controls */}
        <div
          style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            opacity: collapsed ? 0 : 1,
            maxWidth: collapsed ? 0 : '200px',
            overflow: 'hidden',
            transition: 'opacity 0.25s ease, max-width 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
            pointerEvents: collapsed ? 'none' : 'auto',
            flexShrink: 0,
          }}
        >
          {/* Countdown — mobile: 2 lines */}
          <div className="flex lg:hidden flex-col items-end" style={{ lineHeight: 1.25 }}>
            <span style={{ fontSize: '10px', fontWeight: 600, color: '#6b7280', whiteSpace: 'nowrap' }}>Next Conversion:</span>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#111827', fontFamily: 'monospace' }}>
              <Countdown />
            </span>
          </div>

          {/* Connect */}
          <button
            style={{
              backgroundColor: '#111827', color: 'white',
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em',
              padding: '7px 12px', borderRadius: '8px', border: 'none',
              cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0,
            }}
            onClick={() => alert('Wallet connection coming soon.')}
          >
            CONNECT
          </button>

          {/* X — hidden on mobile */}
          <a
            href="https://x.com/TheManagerFi"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex"
            style={{ color: '#9ca3af', alignItems: 'center' }}
          >
            <XIcon />
          </a>

          {/* Hamburger — mobile only (no display in inline style so lg:hidden works) */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(o => !o)}
            style={{ color: '#6b7280', background: 'none', border: 'none', cursor: 'pointer', padding: '2px', lineHeight: 0 }}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile accordion menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden"
          style={{
            marginTop: '8px',
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '14px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            overflow: 'hidden',
          }}
        >
          {navLinks.map(({ label, path }, i) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'block',
                padding: '13px 20px',
                fontSize: '13px',
                fontWeight: isActive(path) ? 700 : 500,
                color: isActive(path) ? '#111827' : '#6b7280',
                textDecoration: 'none',
                borderBottom: i < navLinks.length - 1 ? '1px solid #f3f4f6' : 'none',
                letterSpacing: '0.04em',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
