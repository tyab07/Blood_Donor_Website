import { useState } from 'react';
import StatusBadge from '../components/StatusBadge';

const SAMPLE_REQUESTS = [
    { id: 'REQ-001', bloodGroup: 'O+', units: 2, city: 'Rawalpindi', hospital: 'Holy Family Hospital', urgency: 'Urgent', posted: '2 hours ago', status: 'Open' },
    { id: 'REQ-002', bloodGroup: 'O+', units: 1, city: 'Islamabad', hospital: 'PIMS', urgency: 'Normal', posted: '5 hours ago', status: 'Open' },
    { id: 'REQ-003', bloodGroup: 'O-', units: 3, city: 'Rawalpindi', hospital: 'Benazir Hospital', urgency: 'Urgent', posted: '1 day ago', status: 'Matched' },
];

export default function DonorDashboard() {
    const [available, setAvailable] = useState(true);

    return (
        <div className="space-y-6">
            {/* Status bar */}
            <div className="flex flex-wrap items-center gap-4 border border-surface-200 bg-white rounded-md p-4">
                <div className="flex items-center gap-3">
                    <label htmlFor="availability" className="text-sm font-medium text-surface-700">
                        Availability
                    </label>
                    <button
                        id="availability"
                        onClick={() => setAvailable(!available)}
                        className={`relative w-10 h-5 rounded-full transition-colors ${available ? 'bg-green-500' : 'bg-surface-300'
                            }`}
                    >
                        <span
                            className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${available ? 'translate-x-5' : ''
                                }`}
                        />
                    </button>
                    <span className={`text-sm ${available ? 'text-green-700' : 'text-surface-500'}`}>
                        {available ? 'Available' : 'Unavailable'}
                    </span>
                </div>

                <div className="h-4 w-px bg-surface-200 hidden sm:block" />

                <div className="text-sm text-surface-600">
                    <span className="text-surface-400">Blood Group:</span>{' '}
                    <span className="font-medium text-surface-800">O+</span>
                </div>

                <div className="h-4 w-px bg-surface-200 hidden sm:block" />

                <div className="text-sm text-surface-600">
                    <span className="text-surface-400">Last Donation:</span>{' '}
                    <span className="font-medium text-surface-800">45 days ago</span>
                </div>

                <div className="h-4 w-px bg-surface-200 hidden sm:block" />

                <div className="text-sm">
                    <StatusBadge status="Active" />
                    <span className="text-surface-400 ml-2 text-xs">Eligible to donate</span>
                </div>
            </div>

            {/* Matching requests */}
            <section>
                <h2 className="text-sm font-semibold text-surface-800 mb-3">Matching Requests</h2>
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
                                <th className="text-left px-4 py-2.5 font-medium text-surface-500 hidden lg:table-cell">Posted</th>
                                <th className="text-right px-4 py-2.5 font-medium text-surface-500">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {SAMPLE_REQUESTS.map((req) => (
                                <tr key={req.id} className="border-b border-surface-100 last:border-0 hover:bg-surface-50">
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
                                    <td className="px-4 py-3 text-surface-400 hidden lg:table-cell">{req.posted}</td>
                                    <td className="px-4 py-3 text-right">
                                        {req.status === 'Open' ? (
                                            <div className="flex justify-end gap-2">
                                                <button className="px-3 py-1.5 text-xs font-medium bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors">
                                                    Accept
                                                </button>
                                                <button className="px-3 py-1.5 text-xs font-medium border border-surface-300 text-surface-600 rounded hover:bg-surface-50 transition-colors">
                                                    Decline
                                                </button>
                                            </div>
                                        ) : (
                                            <StatusBadge status={req.status} />
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-xs text-surface-400 mt-2">
                    Showing requests matching your blood group (O+, O-) and city.
                    <span className="italic ml-1">Sample data</span>
                </p>
            </section>

            {/* Recent activity */}
            <section>
                <h2 className="text-sm font-semibold text-surface-800 mb-3">Recent Activity</h2>
                <div className="border border-surface-200 bg-white rounded-md divide-y divide-surface-100">
                    {[
                        { text: 'You accepted request REQ-003 for O- blood', time: '1 day ago' },
                        { text: 'Profile updated — availability set to Available', time: '3 days ago' },
                        { text: 'Donation completed at Holy Family Hospital', time: '45 days ago' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between px-4 py-3">
                            <p className="text-sm text-surface-700">{item.text}</p>
                            <span className="text-xs text-surface-400 shrink-0 ml-4">{item.time}</span>
                        </div>
                    ))}
                </div>
                <p className="text-xs text-surface-400 mt-2 italic">Sample data</p>
            </section>
        </div>
    );
}
