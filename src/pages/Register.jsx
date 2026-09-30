import { useState } from 'react';
import { Link } from 'react-router-dom';

const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
const CITIES = ['Islamabad', 'Rawalpindi', 'Lahore', 'Karachi', 'Peshawar', 'Faisalabad', 'Multan', 'Quetta'];

export default function Register() {
    const [step, setStep] = useState(1);
    const [role, setRole] = useState('donor');

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md">
                {/* Brand */}
                <div className="mb-6 text-center">
                    <span className="text-primary-600 text-2xl font-bold">●</span>
                    <h1 className="text-xl font-semibold text-surface-800 mt-2">Create Account</h1>
                </div>

                {/* Step indicator */}
                <div className="flex items-center gap-2 mb-6">
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center gap-2 flex-1">
                            <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${step >= s
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-surface-200 text-surface-500'
                                    }`}
                            >
                                {s}
                            </div>
                            <span className="text-xs text-surface-500 hidden sm:inline">
                                {s === 1 ? 'Account' : s === 2 ? 'Role' : 'Details'}
                            </span>
                            {s < 3 && <div className="flex-1 h-px bg-surface-200" />}
                        </div>
                    ))}
                </div>

                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="border border-surface-200 bg-white rounded-md p-6"
                >
                    {/* Step 1: Credentials */}
                    {step === 1 && (
                        <>
                            <div className="mb-4">
                                <label htmlFor="reg-name" className="block text-sm font-medium text-surface-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    id="reg-name"
                                    type="text"
                                    required
                                    className="w-full border border-surface-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="reg-email" className="block text-sm font-medium text-surface-700 mb-1">
                                    Email
                                </label>
                                <input
                                    id="reg-email"
                                    type="email"
                                    required
                                    className="w-full border border-surface-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="reg-phone" className="block text-sm font-medium text-surface-700 mb-1">
                                    Phone
                                </label>
                                <input
                                    id="reg-phone"
                                    type="tel"
                                    required
                                    className="w-full border border-surface-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    placeholder="+92 3XX XXXXXXX"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="reg-pass" className="block text-sm font-medium text-surface-700 mb-1">
                                    Password
                                </label>
                                <input
                                    id="reg-pass"
                                    type="password"
                                    required
                                    minLength={8}
                                    className="w-full border border-surface-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                />
                                <p className="text-xs text-surface-400 mt-1">
                                    Min 8 characters, include uppercase, number, and special character.
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setStep(2)}
                                className="w-full bg-primary-600 text-white text-sm font-medium py-2.5 rounded hover:bg-primary-700 transition-colors"
                            >
                                Continue
                            </button>
                        </>
                    )}

                    {/* Step 2: Role */}
                    {step === 2 && (
                        <>
                            <p className="text-sm font-medium text-surface-700 mb-3">
                                Select your role
                            </p>
                            <div className="space-y-2 mb-5">
                                {[
                                    { id: 'donor', label: 'Donor', desc: 'Register as a blood donor' },
                                    { id: 'recipient', label: 'Recipient', desc: 'Request blood for emergencies' },
                                    { id: 'hospital', label: 'Hospital / Blood Bank', desc: 'Manage stock and verify donations' },
                                ].map((r) => (
                                    <label
                                        key={r.id}
                                        className={`flex items-start gap-3 p-3 border rounded cursor-pointer transition-colors ${role === r.id
                                                ? 'border-primary-400 bg-primary-50'
                                                : 'border-surface-200 hover:border-surface-300'
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="role"
                                            value={r.id}
                                            checked={role === r.id}
                                            onChange={() => setRole(r.id)}
                                            className="mt-0.5"
                                        />
                                        <div>
                                            <span className="text-sm font-medium text-surface-800">{r.label}</span>
                                            <p className="text-xs text-surface-500">{r.desc}</p>
                                        </div>
                                    </label>
                                ))}
                            </div>
                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="flex-1 border border-surface-300 text-surface-700 text-sm font-medium py-2.5 rounded hover:bg-surface-50 transition-colors"
                                >
                                    Back
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setStep(3)}
                                    className="flex-1 bg-primary-600 text-white text-sm font-medium py-2.5 rounded hover:bg-primary-700 transition-colors"
                                >
                                    Continue
                                </button>
                            </div>
                        </>
                    )}

                    {/* Step 3: Role-specific details */}
                    {step === 3 && (
                        <>
                            {(role === 'donor' || role === 'recipient') && (
                                <>
                                    <div className="mb-4">
                                        <label htmlFor="blood-group" className="block text-sm font-medium text-surface-700 mb-1">
                                            Blood Group
                                        </label>
                                        <select
                                            id="blood-group"
                                            className="w-full border border-surface-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        >
                                            <option value="">Select</option>
                                            {BLOOD_GROUPS.map((bg) => (
                                                <option key={bg} value={bg}>{bg}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="city" className="block text-sm font-medium text-surface-700 mb-1">
                                            City
                                        </label>
                                        <select
                                            id="city"
                                            className="w-full border border-surface-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        >
                                            <option value="">Select</option>
                                            {CITIES.map((c) => (
                                                <option key={c} value={c}>{c}</option>
                                            ))}
                                        </select>
                                    </div>
                                </>
                            )}
                            {role === 'hospital' && (
                                <>
                                    <div className="mb-4">
                                        <label htmlFor="hosp-name" className="block text-sm font-medium text-surface-700 mb-1">
                                            Hospital / Blood Bank Name
                                        </label>
                                        <input
                                            id="hosp-name"
                                            type="text"
                                            required
                                            className="w-full border border-surface-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="license" className="block text-sm font-medium text-surface-700 mb-1">
                                            License Number
                                        </label>
                                        <input
                                            id="license"
                                            type="text"
                                            required
                                            className="w-full border border-surface-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="hosp-city" className="block text-sm font-medium text-surface-700 mb-1">
                                            City
                                        </label>
                                        <select
                                            id="hosp-city"
                                            className="w-full border border-surface-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        >
                                            <option value="">Select</option>
                                            {CITIES.map((c) => (
                                                <option key={c} value={c}>{c}</option>
                                            ))}
                                        </select>
                                    </div>
                                </>
                            )}

                            <label className="flex items-start gap-2 mb-5 text-sm text-surface-600">
                                <input type="checkbox" required className="mt-0.5 rounded border-surface-300" />
                                <span>
                                    I agree to the{' '}
                                    <span className="text-primary-600">Terms of Service</span> and{' '}
                                    <span className="text-primary-600">Privacy Policy</span>
                                </span>
                            </label>

                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => setStep(2)}
                                    className="flex-1 border border-surface-300 text-surface-700 text-sm font-medium py-2.5 rounded hover:bg-surface-50 transition-colors"
                                >
                                    Back
                                </button>
                                <Link
                                    to="/verify-otp"
                                    className="flex-1 bg-primary-600 text-white text-sm font-medium py-2.5 rounded hover:bg-primary-700 transition-colors text-center"
                                >
                                    Register
                                </Link>
                            </div>
                        </>
                    )}
                </form>

                <p className="text-center text-sm text-surface-500 mt-4">
                    Already have an account?{' '}
                    <Link to="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
