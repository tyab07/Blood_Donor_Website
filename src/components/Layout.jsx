import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

const PAGE_TITLES = {
    '/donor/dashboard': 'Donor Dashboard',
    '/donor/profile': 'My Profile',
    '/requests': 'Emergency Requests',
    '/requests/create': 'New Request',
    '/admin': 'Administration',
    '/login': 'Login',
    '/register': 'Register',
    '/verify-otp': 'Verify OTP',
    '/forgot-password': 'Reset Password',
};

export default function Layout() {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const title = PAGE_TITLES[location.pathname] || 'BloodLink';

    // Auth pages don't get the sidebar
    const isAuthPage = ['/', '/login', '/register', '/verify-otp', '/forgot-password'].includes(
        location.pathname
    );

    if (isAuthPage) {
        return (
            <div className="min-h-screen bg-surface-50">
                <Outlet />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-surface-50">
            <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />

            <div
                className={`transition-[margin-left] duration-200 ${collapsed ? 'ml-16' : 'ml-56'
                    }`}
            >
                {/* Top bar */}
                <header className="h-14 bg-white border-b border-surface-200 flex items-center justify-between px-6 sticky top-0 z-20">
                    <h1 className="text-base font-semibold text-surface-800">{title}</h1>
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-surface-500">Demo User</span>
                        <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm font-medium">
                            D
                        </div>
                    </div>
                </header>

                {/* Page content */}
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
