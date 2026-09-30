import { Link } from 'react-router-dom';

const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
const CITIES = ['Islamabad', 'Rawalpindi', 'Lahore', 'Karachi', 'Peshawar', 'Faisalabad', 'Multan', 'Quetta'];

export default function CreateRequest() {
    return (
        <div className="max-w-2xl">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                {/* Request Details */}
                <section>
                    <h2 className="text-sm font-semibold text-surface-800 mb-3">Request Details</h2>
                    <div className="border border-surface-200 bg-white rounded-md p-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="req-bg" className="block text-sm font-medium text-surface-700 mb-1">
                                    Blood Group Needed <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="req-bg"
                                    required
                                    className="w-full border border-surface-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                >
                                    <option value="">Select</option>
                                    {BLOOD_GROUPS.map((bg) => (
                                        <option key={bg} value={bg}>{bg}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="req-units" className="block text-sm font-medium text-surface-700 mb-1">
                                    Units Required <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="req-units"
                                    type="number"
                                    min={1}
                                    max={10}
                                    defaultValue={1}
                                    required
                                    className="w-full border border-surface-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label htmlFor="req-urgency" className="block text-sm font-medium text-surface-700 mb-1">
                                    Urgency Level <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="req-urgency"
                                    required
                                    className="w-full border border-surface-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                >
                                    <option value="normal">Normal</option>
                                    <option value="urgent">Urgent</option>
                                    <option value="critical">Critical</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="req-city" className="block text-sm font-medium text-surface-700 mb-1">
                                    City <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="req-city"
                                    required
                                    className="w-full border border-surface-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                >
                                    <option value="">Select</option>
                                    {CITIES.map((c) => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hospital */}
                <section>
                    <h2 className="text-sm font-semibold text-surface-800 mb-3">Hospital Information</h2>
                    <div className="border border-surface-200 bg-white rounded-md p-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="sm:col-span-2">
                                <label htmlFor="req-hospital" className="block text-sm font-medium text-surface-700 mb-1">
                                    Hospital Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="req-hospital"
                                    type="text"
                                    required
                                    placeholder="e.g. Holy Family Hospital"
                                    className="w-full border border-surface-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="req-notes" className="block text-sm font-medium text-surface-700 mb-1">
                                    Additional Notes
                                </label>
                                <textarea
                                    id="req-notes"
                                    rows={3}
                                    placeholder="Ward number, patient name, or any special instructions"
                                    className="w-full border border-surface-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section>
                    <h2 className="text-sm font-semibold text-surface-800 mb-3">Contact</h2>
                    <div className="border border-surface-200 bg-white rounded-md p-5">
                        <div>
                            <label htmlFor="req-contact" className="block text-sm font-medium text-surface-700 mb-1">
                                Contact Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="req-contact"
                                type="tel"
                                required
                                placeholder="+92 3XX XXXXXXX"
                                className="w-full border border-surface-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                            <p className="text-xs text-surface-400 mt-1">
                                This number will only be shared with donors who accept your request.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <button
                        type="submit"
                        className="px-5 py-2.5 text-sm font-medium bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors"
                    >
                        Submit Request
                    </button>
                    <Link
                        to="/requests"
                        className="px-5 py-2.5 text-sm font-medium border border-surface-300 text-surface-700 rounded hover:bg-surface-50 transition-colors"
                    >
                        Cancel
                    </Link>
                </div>
            </form>
        </div>
    );
}
