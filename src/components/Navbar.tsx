import { NavLink } from 'react-router-dom';

const links = [
    { to: '/', icon: <GridIcon />, label: 'Dashboard' },
    { to: '/tracking', icon: <UserIcon />, label: 'Tracking' },
    { to: '/predict', icon: <FlashIcon />, label: 'Predict' },
    { to: '/batch', icon: <LayersIcon />, label: 'Batch' },
    { to: '/history', icon: <HistoryIcon />, label: 'History' },
];

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <div className="nav-brand-section">
                    <NavLink to="/" style={{ textDecoration: 'none' }}>
                        <div className="nav-logo-icon">
                            <LogoIcon />
                        </div>
                    </NavLink>
                    <div style={{ flex: 1 }}>
                        <div className="nav-logo-title">
                            CUSTOMER<span style={{ color: 'var(--cyan)' }}>CHURN</span>
                        </div>
                        <div className="nav-logo-sub">PREDICTIVE AI ENGINE</div>
                    </div>
                </div>

                <div className="nav-links">
                    {links.map(({ to, icon, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={to === '/'}
                            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                        >
                            <span className="nav-icon-wrap">{icon}</span>
                            <span>{label}</span>
                        </NavLink>
                    ))}
                </div>

                <div className="nav-status">
                    <span className="status-dot" />
                    SYSTEM OPERATIONAL
                </div>
            </div>
        </nav>
    );
}

// Icons
function LogoIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--cyan)' }}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
        </svg>
    );
}

function GridIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
        </svg>
    );
}

function UserIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
        </svg>
    );
}

function FlashIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
    );
}

function LayersIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
        </svg>
    );
}

function HistoryIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /><path d="M12 2a10 10 0 1 0 10 10" />
        </svg>
    );
}
