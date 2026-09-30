const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
const CITIES = ['Islamabad', 'Rawalpindi', 'Lahore', 'Karachi', 'Peshawar', 'Faisalabad', 'Multan', 'Quetta'];

const DONATION_HISTORY = [
    { date: '2026-08-15', hospital: 'Holy Family Hospital', bloodGroup: 'O+', status: 'Completed' },
    { date: '2026-05-02', hospital: 'PIMS Islamabad', bloodGroup: 'O+', status: 'Completed' },
    { date: '2026-01-20', hospital: 'Shifa International', bloodGroup: 'O+', status: 'Completed' },
];

export default function DonorProfile() {
    return (
        <div className="space-y-6 max-w-3xl">
            {/* Personal Info */}
            <section>
                <h2 className="text-sm font-semibold text-surface-800 mb-3">Personal Information</h2>
                <div className="border border-surface-200 bg-white rounded-md p-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="prof-name" className="block text-sm font-medium text-surface-700 mb-1">Full Name</label>
                            <input
                                id="prof-name"
                                type="text"
                                defaultValue="Ahmed Khan"
                                className="w-full border border-surface-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label htmlFor="prof-email" className="block text-sm font-medium text-surface-700 mb-1">Email</label>
                            <input
                                id="prof-email"
                                type="email"
                                defaultValue="ahmed@example.com"
                                className="w-full border border-surface-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label htmlFor="prof-phone" className="block text-sm font-medium text-surface-700 mb-1">Phone</label>
                            <input
                                id="prof-phone"
                                type="tel"
                                defaultValue="+92 300 1234567"
                                className="w-full border border-surface-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                            <p className="text-xs text-surface-400 mt-1">Hidden from requesters until you accept a request.</p>
                        </div>
                        <div>
                            <label htmlFor="prof-city" className="block text-sm font-medium text-surface-700 mb-1">City</label>
                            <select
                                id="prof-city"
                                defaultValue="Rawalpindi"
                                className="w-full border border-surface-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            >
                                {CITIES.map((c) => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Donation Details */}
            <section>
                <h2 className="text-sm font-semibold text-surface-800 mb-3">Donation Details</h2>
                <div className="border border-surface-200 bg-white rounded-md p-5">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="prof-bg" className="block text-sm font-medium text-surface-700 mb-1">Blood Group</label>
                            <select
                                id="prof-bg"
                                defaultValue="O+"
                                className="w-full border border-surface-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            >
                                {BLOOD_GROUPS.map((bg) => (
                                    <option key={bg} value={bg}>{bg}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="prof-last" className="block text-sm font-medium text-surface-700 mb-1">Last Donation</label>
                            <input
                                id="prof-last"
                                type="date"
                                defaultValue="2026-08-15"
                                className="w-full border border-surface-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-surface-700 mb-1">Availability</label>
                            <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium border rounded bg-green-50 text-green-700 border-green-200">
                                Available
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Save */}
            <div>
                <button
                    type="button"
                    className="px-5 py-2 text-sm font-medium bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors"
                >
                    Save Changes
                </button>
            </div>

            {/* Donation History */}
            <section>
                <h2 className="text-sm font-semibold text-surface-800 mb-3">Donation History</h2>
                <div className="border border-surface-200 bg-white rounded-md overflow-hidden">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-surface-50 border-b border-surface-200">
                                <th className="text-left px-4 py-2.5 font-medium text-surface-500">Date</th>
                                <th className="text-left px-4 py-2.5 font-medium text-surface-500">Hospital</th>
                                <th className="text-left px-4 py-2.5 font-medium text-surface-500">Blood Group</th>
                                <th className="text-left px-4 py-2.5 font-medium text-surface-500">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {DONATION_HISTORY.map((d, i) => (
                                <tr key={i} className="border-b border-surface-100 last:border-0">
                                    <td className="px-4 py-3 text-surface-700">{d.date}</td>
                                    <td className="px-4 py-3 text-surface-700">{d.hospital}</td>
                                    <td className="px-4 py-3">
                                        <span className="font-medium text-primary-700">{d.bloodGroup}</span>
                                    </td>
                                    <td className="px-4 py-3 text-green-700 text-xs font-medium">{d.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-xs text-surface-400 mt-2 italic">Sample data</p>
            </section>
        </div>
    );
}
