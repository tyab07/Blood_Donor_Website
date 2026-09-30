import { NavLink, useLocation } from 'react-router-dom';

const NAV_SECTIONS = {
    donor: {
        label: 'Donor',
        items: [
            { to: '/donor/dashboard', label: 'Dashboard', icon: '⬡' },
            { to: '/donor/profile', label: 'Profile', icon: '◉' },
        ],
    },
    request: {
        label: 'Requests',
        items: [
            { to: '/requests', label: 'All Requests', icon: '▤' },
            { to: '/requests/create', label: 'New Request', icon: '+' },
        ],
    },
    admin: {
        label: 'Administration',
        items: [
            { to: '/admin', label: 'Admin Panel', icon: '⚙' },
        ],
    },
};

export default function Sidebar({ collapsed, onToggle }) {
    const location = useLocation();

    return (
        <aside
            className={`fixed top-0 left-0 h-screen bg-white border-r border-surface-200 flex flex-col transition-[width] duration-200 z-30 ${collapsed ? 'w-16' : 'w-56'
                }`}
        >
            {/* Brand */}
            <div className="h-14 flex items-center gap-2 px-4 border-b border-surface-200 shrink-0">
                <span className="text-primary-600 font-bold text-lg">●</span>
                {!collapsed && (
                    <span className="font-semibold text-sm text-surface-800 truncate">
                        BloodLink
                    </span>
                )}
            </div>

            {/* Nav */}
            <nav className="flex-1 overflow-y-auto py-3 px-2">
                {Object.entries(NAV_SECTIONS).map(([key, section]) => (
                    <div key={key} className="mb-4">
                        {!collapsed && (
                            <p className="text-[11px] font-medium text-surface-400 uppercase tracking-wider px-2 mb-1">
                                {section.label}
                            </p>
                        )}
                        {section.items.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    `flex items-center gap-2.5 px-2.5 py-2 rounded text-sm transition-colors ${isActive
                                        ? 'bg-primary-50 text-primary-700 font-medium'
                                        : 'text-surface-600 hover:bg-surface-100 hover:text-surface-800'
                                    } ${collapsed ? 'justify-center' : ''}`
                                }
                            >
                                <span className="text-base shrink-0">{item.icon}</span>
                                {!collapsed && <span className="truncate">{item.label}</span>}
                            </NavLink>
                        ))}
                    </div>
                ))}
            </nav>

            {/* Collapse toggle */}
            <button
                onClick={onToggle}
                className="h-10 flex items-center justify-center border-t border-surface-200 text-surface-400 hover:text-surface-600 hover:bg-surface-50 transition-colors"
                aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
                <span className="text-sm">{collapsed ? '▸' : '◂'}</span>
            </button>
        </aside>
    );
}
