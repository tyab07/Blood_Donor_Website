import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function VerifyOTP() {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);

    const handleChange = (index, value) => {
        if (value.length > 1) return;
        const next = [...otp];
        next[index] = value;
        setOtp(next);
        // Auto-focus next input
        if (value && index < 5) {
            document.getElementById(`otp-${index + 1}`)?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            document.getElementById(`otp-${index - 1}`)?.focus();
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-sm text-center">
                <span className="text-primary-600 text-2xl font-bold">●</span>
                <h1 className="text-xl font-semibold text-surface-800 mt-2">Verify Your Account</h1>
                <p className="text-sm text-surface-500 mt-1 mb-6">
                    Enter the 6-digit code sent to your email.
                </p>

                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="border border-surface-200 bg-white rounded-md p-6"
                >
                    <div className="flex justify-center gap-2 mb-6">
                        {otp.map((digit, i) => (
                            <input
                                key={i}
                                id={`otp-${i}`}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(i, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(i, e)}
                                className="w-10 h-12 border border-surface-300 rounded text-center text-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                        ))}
                    </div>

                    <Link
                        to="/donor/dashboard"
                        className="block w-full bg-primary-600 text-white text-sm font-medium py-2.5 rounded hover:bg-primary-700 transition-colors"
                    >
                        Verify
                    </Link>

                    <p className="text-sm text-surface-500 mt-4">
                        Didn&apos;t receive the code?{' '}
                        <button type="button" className="text-primary-600 hover:text-primary-700 font-medium">
                            Resend
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
}
