import { useState } from 'react';
import StatusBadge from '../components/StatusBadge';

const TABS = ['Users', 'Hospitals', 'Requests', 'Audit Log'];

const SAMPLE_USERS = [
    { id: 1, name: 'Ahmed Khan', email: 'ahmed@example.com', role: 'Donor', status: 'Active', joined: '2026-09-01' },
    { id: 2, name: 'Sara Ali', email: 'sara@example.com', role: 'Recipient', status: 'Active', joined: '2026-09-05' },
    { id: 3, name: 'Dr. Usman', email: 'usman@hospital.com', role: 'Hospital', status: 'Pending', joined: '2026-09-10' },
    { id: 4, name: 'Spam Account', email: 'spam@fake.com', role: 'Donor', status: 'Blocked', joined: '2026-09-15' },
];

const SAMPLE_HOSPITALS = [
    { id: 1, name: 'Holy Family Hospital', city: 'Rawalpindi', license: 'HFH-2024-001', status: 'Approved' },
    { id: 2, name: 'City Medical Center', city: 'Islamabad', license: 'CMC-2024-015', status: 'Pending' },
    { id: 3, name: 'National Hospital', city: 'Lahore', license: 'NH-2024-022', status: 'Pending' },
];

const SAMPLE_FLAGGED = [
    { id: 'REQ-006', requester: 'unknown@temp.com', reason: 'Duplicate request', bloodGroup: 'A+', city: 'Karachi', status: 'Flagged' },
    { id: 'REQ-009', requester: 'test@test.com', reason: 'Suspicious activity', bloodGroup: 'B-', city: 'Lahore', status: 'Flagged' },
];

const SAMPLE_LOGS = [
    { time: '2026-09-30 22:15', action: 'User blocked', user: 'admin@bloodlink.pk', target: 'spam@fake.com', ip: '192.168.1.x' },
    { time: '2026-09-30 21:00', action: 'Hospital approved', user: 'admin@bloodlink.pk', target: 'Holy Family Hospital', ip: '192.168.1.x' },
    { time: '2026-09-30 20:30', action: 'Login success', user: 'ahmed@example.com', target: '—', ip: '203.0.113.x' },
    { time: '2026-09-30 20:25', action: 'Login failed (attempt 3)', user: 'ahmed@example.com', target: '—', ip: '203.0.113.x' },
    { time: '2026-09-30 19:00', action: 'Request created', user: 'sara@example.com', target: 'REQ-001', ip: '198.51.100.x' },
];

export default function AdminDashboard() {
    const [tab, setTab] = useState('Users');

    return (
        <div className="space-y-4">
            {/* Tabs */}
            <div className="border-b border-surface-200">
                <nav className="flex gap-0 -mb-px">
                    {TABS.map((t) => (
                        <button
                            key={t}
                            onClick={() => setTab(t)}
                            className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${tab === t
                                    ? 'border-primary-600 text-primary-700'
                                    : 'border-transparent text-surface-500 hover:text-surface-700 hover:border-surface-300'
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </nav>
            </div>

            {/* ── Users Tab ── */}
            {tab === 'Users' && (
                <div className="border border-surface-200 bg-white rounded-md overflow-hidden">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-surface-50 border-b border-surface-200">
                                <th className="text-left px-4 py-2.5 font-medium text-surface-500">Name</th>
                                <th className="text-left px-4 py-2.5 font-medium text-surface-500 hidden sm:table-cell">Email</th>
                                <th className="text-left px-4 py-2.5 font-medium text-surface-500">Role</th>
                                <th className="text-left px-4 py-2.5 font-medium text-surface-500">Status</th>
                                <th className="text-left px-4 py-2.5 font-medium text-surface-500 hidden md:table-cell">Joined</th>
                                <th className="text-right px-4 py-2.5 font-medium text-surface-500">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {SAMPLE_USERS.map((u) => (
                                <tr key={u.id} className="border-b border-surface-100 last:border-0 hover:bg-surface-50">
                                    <td className="px-4 py-3 font-medium text-surface-800">{u.name}</td>
                                    <td className="px-4 py-3 text-surface-600 hidden sm:table-cell">{u.email}</td>
                                    <td className="px-4 py-3 text-surface-600">{u.role}</td>
                                    <td className="px-4 py-3"><StatusBadge status={u.status} /></td>
                                    <td className="px-4 py-3 text-surface-400 hidden md:table-cell">{u.joined}</td>
                                    <td className="px-4 py-3 text-right">
                                        {u.status === 'Pending' && (
                                            <button className="px-3 py-1 text-xs font-medium bg-primary-600 text-white rounded hover:bg-primary-700">
                                                Approve
                                            </button>
                                        )}
                                        {u.status === 'Active' && (
                                            <button className="px-3 py-1 text-xs font-medium border border-red-300 text-red-600 rounded hover:bg-red-50">
                                                Block
                                            </button>
                                        )}
                                        {u.status === 'Blocked' && (
                                            <button className="px-3 py-1 text-xs font-medium border border-surface-300 text-surface-600 rounded hover:bg-surface-50">
                                                Unblock
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* ── Hospitals Tab ── */}
            {tab === 'Hospitals' && (
                <div className="border border-surface-200 bg-white rounded-md overflow-hidden">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-surface-50 border-b border-surface-200">
                                <th className="text-left px-4 py-2.5 font-medium text-surface-500">Hospital</th>
                                <th className="text-left px-4 py-2.5 font-medium text-surface-500">City</th>
                                <th className="text-left px-4 py-2.5 font-medium text-surface-500 hidden sm:table-cell">License</th>
                                <th className="text-left px-4 py-2.5 font-medium text-surface-500">Status</th>
                                <th className="text-right px-4 py-2.5 font-medium text-surface-500">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {SAMPLE_HOSPITALS.map((h) => (
                                <tr key={h.id} className="border-b border-surface-100 last:border-0 hover:bg-surface-50">
                                    <td className="px-4 py-3 font-medium text-surface-800">{h.name}</td>
                                    <td className="px-4 py-3 text-surface-600">{h.city}</td>
                                    <td className="px-4 py-3 text-surface-500 hidden sm:table-cell">{h.license}</td>
                                    <td className="px-4 py-3"><StatusBadge status={h.status} /></td>
                                    <td className="px-4 py-3 text-right">
                                        {h.status === 'Pending' ? (
                                            <div className="flex justify-end gap-2">
                                                <button className="px-3 py-1 text-xs font-medium bg-primary-600 text-white rounded hover:bg-primary-700">
                                                    Approve
                                                </button>
                                                <button className="px-3 py-1 text-xs font-medium border border-red-300 text-red-600 rounded hover:bg-red-50">
                                                    Reject
                                                </button>
                                            </div>
                                        ) : (
                                            <span className="text-xs text-surface-400">—</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* ── Requests Tab ── */}
            {tab === 'Requests' && (
                <>
                    <p className="text-sm text-surface-500">Flagged or reported requests for review.</p>
                    <div className="border border-surface-200 bg-white rounded-md overflow-hidden">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-surface-50 border-b border-surface-200">
                                    <th className="text-left px-4 py-2.5 font-medium text-surface-500">ID</th>
                                    <th className="text-left px-4 py-2.5 font-medium text-surface-500">Requester</th>
                                    <th className="text-left px-4 py-2.5 font-medium text-surface-500 hidden sm:table-cell">Reason</th>
                                    <th className="text-left px-4 py-2.5 font-medium text-surface-500">Blood</th>
                                    <th className="text-left px-4 py-2.5 font-medium text-surface-500">Status</th>
                                    <th className="text-right px-4 py-2.5 font-medium text-surface-500">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {SAMPLE_FLAGGED.map((f) => (
                                    <tr key={f.id} className="border-b border-surface-100 last:border-0 hover:bg-surface-50">
                                        <td className="px-4 py-3 font-medium text-surface-800">{f.id}</td>
                                        <td className="px-4 py-3 text-surface-600">{f.requester}</td>
                                        <td className="px-4 py-3 text-surface-600 hidden sm:table-cell">{f.reason}</td>
                                        <td className="px-4 py-3">
                                            <span className="font-medium text-primary-700">{f.bloodGroup}</span>
                                        </td>
                                        <td className="px-4 py-3"><StatusBadge status={f.status} /></td>
                                        <td className="px-4 py-3 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button className="px-3 py-1 text-xs font-medium border border-surface-300 text-surface-600 rounded hover:bg-surface-50">
                                                    Dismiss
                                                </button>
                                                <button className="px-3 py-1 text-xs font-medium border border-red-300 text-red-600 rounded hover:bg-red-50">
                                                    Remove
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}

            {/* ── Audit Log Tab ── */}
            {tab === 'Audit Log' && (
                <div className="border border-surface-200 bg-white rounded-md overflow-hidden">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-surface-50 border-b border-surface-200">
                                <th className="text-left px-4 py-2.5 font-medium text-surface-500">Time</th>
                                <th className="text-left px-4 py-2.5 font-medium text-surface-500">Action</th>
                                <th className="text-left px-4 py-2.5 font-medium text-surface-500 hidden sm:table-cell">User</th>
                                <th className="text-left px-4 py-2.5 font-medium text-surface-500 hidden md:table-cell">Target</th>
                                <th className="text-left px-4 py-2.5 font-medium text-surface-500 hidden lg:table-cell">IP</th>
                            </tr>
                        </thead>
                        <tbody>
                            {SAMPLE_LOGS.map((log, i) => (
                                <tr key={i} className="border-b border-surface-100 last:border-0 hover:bg-surface-50">
                                    <td className="px-4 py-3 text-surface-500 text-xs font-mono whitespace-nowrap">{log.time}</td>
                                    <td className="px-4 py-3 text-surface-800">{log.action}</td>
                                    <td className="px-4 py-3 text-surface-600 hidden sm:table-cell">{log.user}</td>
                                    <td className="px-4 py-3 text-surface-600 hidden md:table-cell">{log.target}</td>
                                    <td className="px-4 py-3 text-surface-400 font-mono text-xs hidden lg:table-cell">{log.ip}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <p className="text-xs text-surface-400 italic">Sample data for demonstration</p>
        </div>
    );
}
