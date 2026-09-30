import { useState } from 'react';
import { Link } from 'react-router-dom';
import StatusBadge from '../components/StatusBadge';

const SAMPLE_REQUESTS = [
    { id: 'REQ-001', bloodGroup: 'O+', units: 2, city: 'Rawalpindi', hospital: 'Holy Family Hospital', urgency: 'Urgent', status: 'Open', posted: '2026-09-30 18:30', matchedDonors: 0 },
    { id: 'REQ-002', bloodGroup: 'A-', units: 1, city: 'Islamabad', hospital: 'PIMS', urgency: 'Normal', status: 'Matched', posted: '2026-09-30 14:00', matchedDonors: 1 },
    { id: 'REQ-003', bloodGroup: 'B+', units: 3, city: 'Lahore', hospital: 'Mayo Hospital', urgency: 'Critical', status: 'Open', posted: '2026-09-30 12:15', matchedDonors: 0 },
    { id: 'REQ-004', bloodGroup: 'AB+', units: 1, city: 'Rawalpindi', hospital: 'CMH', urgency: 'Normal', status: 'Closed', posted: '2026-09-29 09:00', matchedDonors: 2 },
    { id: 'REQ-005', bloodGroup: 'O-', units: 2, city: 'Karachi', hospital: 'Agha Khan', urgency: 'Urgent', status: 'Expired', posted: '2026-09-28 06:00', matchedDonors: 0 },
];

const BLOOD_GROUPS = ['All', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
const STATUSES = ['All', 'Open', 'Matched', 'Closed', 'Expired'];

export default function RequestList() {
    const [bgFilter, setBgFilter] = useState('All');
    const [statusFilter, setStatusFilter] = useState('All');
    const [expanded, setExpanded] = useState(null);

    const filtered = SAMPLE_REQUESTS.filter((r) => {
        if (bgFilter !== 'All' && r.bloodGroup !== bgFilter) return false;
        if (statusFilter !== 'All' && r.status !== statusFilter) return false;
        return true;
    });

    return (
        <div className="space-y-4">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                    <label htmlFor="bg-filter" className="text-sm text-surface-500">Blood Group:</label>
                    <select
                        id="bg-filter"
                        value={bgFilter}
                        onChange={(e) => setBgFilter(e.target.value)}
                        className="border border-surface-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                        {BLOOD_GROUPS.map((bg) => (
                            <option key={bg} value={bg}>{bg}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center gap-2">
                    <label htmlFor="status-filter" className="text-sm text-surface-500">Status:</label>
                    <select
                        id="status-filter"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="border border-surface-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                        {STATUSES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                </div>
                <div className="flex-1" />
                <Link
                    to="/requests/create"
                    className="px-4 py-2 text-sm font-medium bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors"
                >
                    + New Request
                </Link>
            </div>

            {/* Table */}
            <div className="border border-surface-200 bg-white rounded-md overflow-hidden">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-surface-50 border-b border-surface-200">
                            <th className="text-left px-4 py-2.5 font-medium text-surface-500">ID</th>
                            <th className="text-left px-4 py-2.5 font-medium text-surface-500">Blood</th>
                            <th className="text-left px-4 py-2.5 font-medium text-surface-500 hidden sm:table-cell">Units</th>
                            <th className="text-left px-4 py-2.5 font-medium text-surface-500">City</th>
                            <th className="text-left px-4 py-2.5 font-medium text-surface-500 hidden md:table-cell">Hospital</th>
                            <th className="text-left px-4 py-2.5 font-medium text-surface-500">Urgency</th>
                            <th className="text-left px-4 py-2.5 font-medium text-surface-500">Status</th>
                            <th className="text-left px-4 py-2.5 font-medium text-surface-500 hidden lg:table-cell">Donors</th>
                            <th className="w-10" />
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.length === 0 && (
                            <tr>
                                <td colSpan={9} className="px-4 py-8 text-center text-surface-400">
                                    No requests match the filters.
                                </td>
                            </tr>
                        )}
                        {filtered.map((req) => (
                            <>
                                <tr
                                    key={req.id}
                                    className="border-b border-surface-100 last:border-0 hover:bg-surface-50 cursor-pointer"
                                    onClick={() => setExpanded(expanded === req.id ? null : req.id)}
                                >
                                    <td className="px-4 py-3 font-medium text-surface-800">{req.id}</td>
                                    <td className="px-4 py-3">
                                        <span className="inline-flex items-center justify-center w-8 h-8 border border-primary-200 bg-primary-50 rounded text-sm font-semibold text-primary-700">
                                            {req.bloodGroup}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-surface-600 hidden sm:table-cell">{req.units}</td>
                                    <td className="px-4 py-3 text-surface-600">{req.city}</td>
                                    <td className="px-4 py-3 text-surface-600 hidden md:table-cell">{req.hospital}</td>
                                    <td className="px-4 py-3">
                                        <StatusBadge status={req.urgency} />
                                    </td>
                                    <td className="px-4 py-3">
                                        <StatusBadge status={req.status} />
                                    </td>
                                    <td className="px-4 py-3 text-surface-600 hidden lg:table-cell">{req.matchedDonors}</td>
                                    <td className="px-4 py-3 text-surface-400">
                                        <span className={`inline-block transition-transform ${expanded === req.id ? 'rotate-90' : ''}`}>▸</span>
                                    </td>
                                </tr>
                                {expanded === req.id && (
                                    <tr key={`${req.id}-detail`}>
                                        <td colSpan={9} className="bg-surface-50 px-4 py-4 border-b border-surface-200">
                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <span className="text-surface-400 text-xs">Posted</span>
                                                    <p className="text-surface-700">{req.posted}</p>
                                                </div>
                                                <div>
                                                    <span className="text-surface-400 text-xs">Hospital</span>
                                                    <p className="text-surface-700">{req.hospital}</p>
                                                </div>
                                                <div>
                                                    <span className="text-surface-400 text-xs">Matched Donors</span>
                                                    <p className="text-surface-700">{req.matchedDonors}</p>
                                                </div>
                                                <div>
                                                    <span className="text-surface-400 text-xs">Contact</span>
                                                    <p className="text-surface-500 text-xs italic">
                                                        {req.status === 'Matched' ? '+92 3XX XXXXXXX' : 'Visible after donor accepts'}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="text-xs text-surface-400 italic">Sample data for demonstration</p>
        </div>
    );
}
